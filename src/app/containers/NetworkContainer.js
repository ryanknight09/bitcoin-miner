import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useGameContext } from "../state/GameContext";
import ASICMiner from "../components/ASICMiner";
import Bitcoin from "../components/Bitcoin";

const NetworkContainer = () => {
  const classes = styles();
  const [active, setActive] = useState(false);
  const { state, dispatch } = useGameContext();
  const { isRunning } = state;

  const handleCoinClick = () => {
    dispatch("coin-clicked");
    setActive(false);
  };

  useEffect(() => {
    const time = Math.floor(Math.random() * 2500);
    let interval = setTimeout(() => {
      setActive(!active);
    }, time);

    if (!isRunning) {
      clearInterval(interval);
      setActive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, active]);

  return (
    <div className={classes.sceneContainer}>
      <ASICMiner />
      <Bitcoin active={active} handleCoinClick={handleCoinClick} />
    </div>
  );
};

export default NetworkContainer;

const styles = createUseStyles({
  sceneContainer: {
    position: "relative",
  },
});
