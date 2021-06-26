import React, { useMemo } from "react";
import useCustomReducer from "../hooks/useCustomeReducer";
import reducer from "./reducer";

const GameContext = React.createContext();

const initialState = {
  isRunning: false,
  minedBitcoins: 0,
  time: 30,
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useCustomReducer(reducer, initialState);

  const obj = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <GameContext.Provider value={obj}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameContext");
  }
  return context;
};

export { GameContext, useGameContext, GameProvider };
