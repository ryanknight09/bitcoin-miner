import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useGameContext } from "../state/GameContext";

const Timer = () => {
  const classes = styles();
  const { state, dispatch } = useGameContext();
  const { isRunning, time } = state;

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch("decrement-time");
      }, 1000);
    }
    if (time === 0 || !isRunning) {
      clearInterval(timer);
      dispatch("stop-game");
    }
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, isRunning]);

  return <h2 className={classes.time}>{`${time}`}</h2>;
};

export default Timer;

const styles = createUseStyles({
  time: {
    margin: 0,
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "400%",
    },
  },
});
