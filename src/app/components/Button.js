import React from "react";
import { createUseStyles } from "react-jss";

const Button = ({ children, className, onClick }) => {
  const classes = styles();

  return (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

const styles = createUseStyles({
  button: {
    minWidth: 64,
    borderRadius: 4,
    cursor: "pointer",
    height: "inherit",
    backgroundColor: "transparent",
    border: "1px solid white",
    padding: "5px 15px",
    boxSizing: "border-box",
    fontSize: "0.875rem",
    lineHeight: 1.75,
    color: "white",
    fontWeight: 600,
    "&:hover": {
      opacity: 0.7,
    },
    "&:active": {
      boxShadow: "0 gray",
      transform: "translateY(2px)",
    },
  },
});
