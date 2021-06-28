import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import Controllers from "../Controllers";
import user from "@testing-library/user-event";

describe("Controllers", () => {
  const mockGameContext = {
    state: {
      isRunning: "",
      minedBitcoins: 0,
      time: 30,
    },
    dispatch: jest.fn(),
  };

  it("should render a reset, start, and stop button", () => {
    render(<Controllers />, {
      gameContext: mockGameContext,
    });

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    screen.getByText(/reset/i);
    screen.getByText(/start/i);
    screen.getByText(/stop/i);
  });

  it("should call dispatch with reset and stop-game, when reset button is clicked", () => {
    render(<Controllers />, {
      gameContext: mockGameContext,
    });

    const resetButton = screen.getByText(/reset/i);
    user.click(resetButton);
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("reset");
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("stop-game");
  });

  it("should call dispatch with start-game, when start button is clicked", () => {
    render(<Controllers />, {
      gameContext: mockGameContext,
    });

    const startButton = screen.getByText(/start/i);
    user.click(startButton);
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("start-game");
  });

  it("should call dispatch with stop-game, when stop button is clicked", () => {
    render(<Controllers />, {
      gameContext: mockGameContext,
    });

    const stopButton = screen.getByText(/stop/i);
    user.click(stopButton);
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("stop-game");
  });
});
