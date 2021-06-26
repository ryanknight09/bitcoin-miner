import React from "react";
import { createUseStyles } from "react-jss";
import NetworkContainer from "./NetworkContainer";

const GameBoard = () => {
  const classes = styles();

  const Networks = () => {
    let networks = [];
    for (let i = 0; i < 6; i++) {
      networks.push(
        <div key={i} className={classes.item}>
          <NetworkContainer />
        </div>
      );
    }
    return networks;
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <Networks />
      </div>
    </main>
  );
};

export default GameBoard;

const styles = createUseStyles({
  main: {
    flexGrow: 1,
    padding: 0,
    display: "flex",
    marginTop: 40,
    marginBottom: 100,
    width: "60%",
    "@media (max-width: 1000px)": {
      width: "80%",
    },
  },
  container: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: "0 1 33.33%",
    overflow: "hidden",
  },
});
