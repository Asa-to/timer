import {
  useState, useRef, useCallback, useEffect,
} from 'react';

const useTimer = (limit: number): [number, () => void] => {
  const [timer, setTimer] = useState(limit);
  const timerID = useRef<NodeJS.Timeout>();
  const reset = useCallback(() => setTimer(limit), [limit]);
  const tick = () => setTimer((t) => t - 1);

  useEffect(() => {
    const clearTimer = () => {
      if (timerID.current) clearInterval(timerID.current);
    };

    clearTimer();
    reset();
    timerID.current = setInterval(() => tick(), 1000);

    return clearTimer;
  }, [limit, reset]);

  useEffect(() => {
    if (timer === 0) reset();
  }, [timer, reset]);

  return [timer, reset];
};

export default useTimer;
