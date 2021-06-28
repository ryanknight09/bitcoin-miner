import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import NetworkContainer from "../NetworkContainer";
import user from "@testing-library/user-event";

describe("NetworkContainer", () => {
  it("should render a Bitcoin and an ASICMiner", () => {
    const mockGameContext = {
      state: {
        isRunning: true,
      },
      dispatch: jest.fn(),
    };

    render(<NetworkContainer />, {
      gameContext: mockGameContext,
    });

    screen.getByTestId("bitcoin");
    screen.getByTestId("ASICMiner");
  });

  it("should call handleClick when the rendered Bitcoin is clicked and fire", () => {
    const mockGameContext = {
      state: {
        isRunning: true,
      },
      dispatch: jest.fn(),
    };

    render(<NetworkContainer />, {
      gameContext: mockGameContext,
    });

    const bitcoin = screen.getByTestId("bitcoin");
    user.click(bitcoin);

    expect(mockGameContext.dispatch).toHaveBeenCalledWith("coin-clicked");
    expect(bitcoin).not.toHaveClass("up-0-2-2");
  });

  it("should randomly activate the network", () => {
    const mockGameContext = {
      state: {
        isRunning: true,
      },
      dispatch: jest.fn(),
    };

    render(<NetworkContainer />, {
      gameContext: mockGameContext,
    });

    const bitcoin = screen.getByTestId("bitcoin");
    expect(bitcoin).not.toHaveClass("up-0-2-2");

    setTimeout(() => {
      expect(bitcoin).toHaveClass("up-0-2-2");
    }, 2000);
  });
});
