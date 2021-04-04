import React, { FC } from 'react';
import {
  Card, CardContent, makeStyles, Typography,
} from '@material-ui/core';

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

const TimerCard: FC<{timer: number}> = ({ timer }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography color="textPrimary">
          {timer}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimerCard;
