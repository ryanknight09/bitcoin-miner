import React from "react";
import { createUseStyles } from "react-jss";
import BitcoinValueFinder from "../components/BitcoinValueFinder";
import Controllers from "../components/Controllers";
import Timer from "../components/Timer";
import { useGameContext } from "../state/GameContext";

const Controls = () => {
  const classes = styles();
  const {
    state: { minedBitcoins },
  } = useGameContext();

  return (
    <div data-testid="controls" className={classes.root}>
      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <Controllers />
        </div>
        <div className={classes.flexItem}>
          <Timer />
        </div>
        <div className={classes.flexItem}>
          <BitcoinValueFinder bitcoins={minedBitcoins} />
        </div>
      </div>
    </div>
  );
};

export default Controls;

const styles = createUseStyles({
  root: {
    backgroundColor: "#141414",
    width: "100%",
  },
  flexContainer: {
    display: "flex",
    padding: "10px 24px 10px 24px",
    maxWidth: 1200,
    margin: "auto",
  },
  flexItem: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
    width: "100%",
    color: "white",
    margin: "auto",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
});
