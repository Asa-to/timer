import React, { FC, useState } from 'react';
import {
  Input, makeStyles,
} from '@material-ui/core';
import useTimer from './useTimer';
import TimerCard from './TimerCard';

const useStyle = makeStyles({
  root: {
    display: 'block',
    margin: 'auto',
    width: '300px',
  },
  content: {
    textAlign: 'center',
  },
});

const App: FC = () => {
  const [limit, setLimit] = useState(0);
  const timer = useTimer(limit);
  const classes = useStyle();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLimit(Number(e.target.value));
  };

  return (
    <>
      <TimerCard timer={timer} />
      <Input type="number" className={classes.root} onChange={handleChange} defaultValue={0} />
    </>
  );
};

export default App;
