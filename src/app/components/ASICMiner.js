import React from "react";
import { createUseStyles } from "react-jss";

const ASICMiner = () => {
  const classes = styles();

  return (
    <img
      className={classes.ASIC}
      src="https://freesvg.org/img/1408356989.png"
      alt="Bitcoin"
    />
  );
};

export default ASICMiner;

const styles = createUseStyles({
  ASIC: {
    position: "relative",
    width: 125,
    height: 125,
    bottom: -50,
    zIndex: 2,
  },
});
