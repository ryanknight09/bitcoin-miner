import React from "react";
import { createUseStyles } from "react-jss";
const Bitcoin = ({ active, handleCoinClick }) => {
  const classes = styles();

  return (
    <div data-testid="bitcoin" onClick={handleCoinClick}>
      <img
        className={`${classes.bitcoin} ${active && classes.up}`}
        src="https://freesvg.org/img/Gold-Bitcoin.png"
        alt="Bitcoin"
      />
    </div>
  );
};

export default Bitcoin;

const styles = createUseStyles({
  bitcoin: {
    backgroundSize: "60%",
    position: "absolute",
    top: "100%",
    width: 100,
    height: 100,
    transition: "all 0.4s",
    alignSelf: "center",
    marginLeft: "auto",
    opacity: 0.5,
    padding: "10%",
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
  },
  up: {
    top: 0,
  },
});
