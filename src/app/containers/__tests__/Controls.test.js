import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import Controls from "../Controls";
import user from "@testing-library/user-event";

describe("Controls", () => {
  const mockGameContext = {
    state: {
      isRunning: "",
      minedBitcoins: 0,
      time: 30,
    },
    dispatch: jest.fn(),
  };

  it("should render a Timer component", () => {
    render(<Controls />);

    screen.getByTestId("timer");
  });

  it("should render a BitcoinValueFinder component", () => {
    render(<Controls />);

    screen.getByTestId("value-finder");
  });

  it("should render a reset, start, and stop button", () => {
    render(<Controls />, {
      gameContext: mockGameContext,
    });

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    screen.getByText(/reset/i);
    screen.getByText(/start/i);
    screen.getByText(/stop/i);
  });

  it("should call dispatch with reset and stop-game, when reset button is clicked", () => {
    render(<Controls />, {
      gameContext: mockGameContext,
    });

    const resetButton = screen.getByText(/reset/i);
    user.click(resetButton);
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("reset");
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("stop-game");
  });

  it("should call dispatch with start-game, when start button is clicked", () => {
    render(<Controls />, {
      gameContext: mockGameContext,
    });

    const startButton = screen.getByText(/start/i);
    user.click(startButton);
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("start-game");
  });

  it("should call dispatch with stop-game, when stop button is clicked", () => {
    render(<Controls />, {
      gameContext: mockGameContext,
    });

    const stopButton = screen.getByText(/stop/i);
    user.click(stopButton);
    expect(mockGameContext.dispatch).toHaveBeenCalledWith("stop-game");
  });
});
