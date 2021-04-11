import React, {
  FC, useState, useRef,
} from 'react';
import { TextField, Button } from '@material-ui/core';
import useTimer from './utils/useTimer';

const App: FC = () => {
  const [limit, setLimit] = useState(0);
  const {
    timer, isCountDown, isActive, setIsCountDown, setIsActive,
  } = useTimer(limit);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);
    setLimit(Number(inputRef.current?.value || 0));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLimit(Number(e.target.value));
  };

  if (inputRef.current) inputRef.current.value = String(timer);

  return (
    <>
      <TextField type="number" onChange={handleChange} variant="filled" inputRef={inputRef} defaultValue={0} />
      <Button
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          setIsCountDown(true);
          setLimit(Number(inputRef.current?.value || 0));
        }}
        color={isCountDown ? 'primary' : 'default'}
        variant="contained"
      >
        カウントダウン
      </Button>
      <Button
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          setIsCountDown(false);
          setLimit(Number(inputRef.current?.value || 0));
        }}
        color={isCountDown ? 'default' : 'primary'}
        variant="contained"
      >
        カウントアップ
      </Button>
      <Button onClick={handleClick} variant="contained">
        {isActive ? 'ストップ' : 'スタート'}
      </Button>
    </>
  );
};

export default App;
