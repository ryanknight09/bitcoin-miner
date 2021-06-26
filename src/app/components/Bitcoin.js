import React from "react";
import { createUseStyles } from "react-jss";

const Bitcoin = ({ active, handleCoinClick }) => {
  const classes = styles();

  return (
    <div>
      <img
        onClick={handleCoinClick}
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
    "&:hover": {
      opacity: 1,
    },
    "&:active": {
      boxShadow: "0 gray",
      transform: "translateY(2px)",
    },
  },
  up: {
    top: 0,
  },
});
