import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import GameBoard from "../GameBoard";

describe("GameBoard", () => {
  it("should render six NetworkContainers", () => {
    render(<GameBoard />);

    const networks = screen.getAllByTestId("network-container");
    expect(networks).toHaveLength(6);
  });
});
