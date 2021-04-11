import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';

const useTimer = (limit: number): {
  timer: number,
  isCountDown: boolean,
  isActive: boolean,
  setIsCountDown: React.Dispatch<React.SetStateAction<boolean>>,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
} => {
  const [timer, setTimer] = useState(limit);
  const [isCountDown, setIsCountDown] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const timerID = useRef<NodeJS.Timeout>();
  const countDown = () => setTimer((t) => {
    if (t - 1 === 0) setIsActive(false);

    return (t - 1 < 0 ? 0 : t - 1);
  });
  const countUp = () => setTimer((t) => t + 1);
  const tick = useCallback(() => (isCountDown ? countDown() : countUp()), [isCountDown]);

  useEffect(() => {
    const clearTimer = () => {
      if (timerID.current) clearInterval(timerID.current);
    };

    clearTimer();
    setTimer(limit);
    timerID.current = setInterval(() => {
      if (isActive) tick();
    }, 1000);

    return clearTimer;
  }, [limit, tick, isActive]);

  return {
    timer, isCountDown, isActive, setIsCountDown, setIsActive,
  };
};

export default useTimer;
