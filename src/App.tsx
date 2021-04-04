import React, { FC, useState } from 'react';
import {
  TextField, makeStyles,
} from '@material-ui/core';
import useTimer from './utils/useTimer';
import TimerCard from './component/TimerCard';

const useStyle = makeStyles({
  root: {
    display: 'block',
    margin: 'auto',
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
      <TextField type="number" variant="filled" className={classes.root} onChange={handleChange} defaultValue={0} />
      <TimerCard timer={timer} />
    </>
  );
};

export default App;
