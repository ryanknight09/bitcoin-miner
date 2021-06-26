import React from "react";
import { createUseStyles } from "react-jss";
import { useGameContext } from "../state/GameContext";
import Button from "./Button";

const Controllers = () => {
  const classes = styles();
  const { dispatch } = useGameContext();

  const reset = () => {
    dispatch("stop-game");
    dispatch("reset");
  };

  return (
    <>
      <Button className={classes.btn} onClick={reset}>
        RESET
      </Button>
      <Button className={classes.btn} onClick={() => dispatch("start-game")}>
        START
      </Button>
      <Button className={classes.btn} onClick={() => dispatch("stop-game")}>
        STOP
      </Button>
    </>
  );
};

export default Controllers;

const styles = createUseStyles({
  btn: {
    margin: "8px 8px",
    flexGrow: 1,
  },
});
