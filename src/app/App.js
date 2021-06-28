import React from "react";
import { createUseStyles } from "react-jss";
import Controls from "./containers/Controls";
import GameBoard from "./containers/GameBoard";
import Header from "./containers/Header";
import { GameProvider } from "./state/GameContext";

function App() {
  const classes = styles();

  return (
    <div className={classes.app}>
      <GameProvider>
        <Header />
        <Controls />
        <GameBoard />
      </GameProvider>
    </div>
  );
}

export default App;

const styles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#282c34",
    height: "100vh",
    alignItems: "center",
    "@media (max-width: 480px)": {
      height: "unset",
    },
  },
});
