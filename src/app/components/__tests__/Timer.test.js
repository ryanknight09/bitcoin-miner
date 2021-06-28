import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import Timer from "../Timer";

describe("Timer", () => {
  it("should render a timer with the correct time from state", () => {
    const mockGameContext = {
      state: {
        isRunning: "",
        time: 30,
      },
      dispatch: jest.fn(),
    };
    render(<Timer />, {
      gameContext: mockGameContext,
    });

    screen.getByText(mockGameContext.state.time);
  });

  it("should dispatch to update the time if the isRunning is true", () => {
    const mockGameContext = {
      state: {
        isRunning: true,
        time: 30,
      },
      dispatch: jest.fn(),
    };

    render(<Timer />, {
      gameContext: mockGameContext,
    });

    setTimeout(() => {
      expect(mockGameContext.dispatch).toHaveBeenCalledWith("decrement-time");
    }, 3000);
  });

  it("should dispatch to stop the game if time reaches zero", () => {
    const mockGameContext = {
      state: {
        isRunning: true,
        time: 2,
      },
      dispatch: jest.fn(),
    };

    render(<Timer />, {
      gameContext: mockGameContext,
    });

    setTimeout(() => {
      expect(mockGameContext.dispatch).toHaveBeenCalledWith("stop-game");
    }, 3000);
  });
});
