import { act, render } from "@testing-library/react";
import React from "react";
import { GameContext } from "./app/state/GameContext";

const defaultGameContext = {
  state: {
    isRunning: "",
    minedBitcoins: 0,
    time: 30,
  },
  dispatch: jest.fn(),
};

const customRender = (ui, options = {}) => {
  const rendered = render(
    <GameContext.Provider value={options.gameContext || defaultGameContext}>
      {ui}
    </GameContext.Provider>
  );
  return {
    ...rendered,
    rerender: (ui, options) => {
      return customRender(ui, { container: rendered.container, ...options });
    },
  };
};

export const resizeWindowTo = (width, height) => {
  act(() => {
    window.resizeTo(width, height);
  });
};

export { customRender as render };
