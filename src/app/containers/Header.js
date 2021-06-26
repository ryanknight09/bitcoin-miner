import React from "react";
import { createUseStyles } from "react-jss";

const Header = () => {
  const classes = styles();
  return (
    <header>
      <h1 className={classes.h1}>
        The
        <br />
        <span className={classes.span}>Bitcoin-Mining</span>
        <br />
        Network
      </h1>
    </header>
  );
};

export default Header;

const styles = createUseStyles({
  h1: {
    margin: 0,
    padding: "20px 0",
    textAlign: "center",
    color: "white",
    fontWeight: "normal",
    lineHeight: 1.1,
  },
  span: {
    fontSize: "200%",
    textTransform: "uppercase",
  },
});
