import {
  useState, useRef, useCallback, useEffect,
} from 'react';

const useTimer = (limit: number): number => {
  const [timer, setTimer] = useState(limit);
  const timerID = useRef<NodeJS.Timeout>();
  const tick = useCallback(() => setTimer((t) => (t - 1 < 0 ? 0 : t - 1)), []);

  useEffect(() => {
    const clearTimer = () => {
      if (timerID.current) clearInterval(timerID.current);
    };

    clearTimer();
    setTimer(limit);
    timerID.current = setInterval(() => tick(), 1000);

    return clearTimer;
  }, [limit, tick]);

  return timer;
};

export default useTimer;
