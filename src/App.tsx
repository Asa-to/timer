import React, { FC, useState } from 'react';
import {
  Card, CardContent, Input, makeStyles, Typography,
} from '@material-ui/core';
import useTimer from './useTimer';

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
  const [limit, setLimit] = useState(10);
  const timer = useTimer(limit);
  const classes = useStyle();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLimit(Number(e.target.value));
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.content}>
          <Typography color="textPrimary">
            {timer}
          </Typography>
        </CardContent>
      </Card>
      <Input className={classes.root} onChange={handleChange} />
    </>
  );
};

export default App;
