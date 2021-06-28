import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../testUtils";
import App from "./App";

describe("App", () => {
  it("should render a Header component", () => {
    render(<App />);

    screen.getByTestId("header");
  });

  it("should render a Controls component", () => {
    render(<App />);

    screen.getByTestId("controls");
  });

  it("should render a GameBoard component", () => {
    render(<App />);

    screen.getByTestId("game-board");
  });
});
