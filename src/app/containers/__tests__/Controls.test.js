import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import Controls from "../Controls";

describe("Controls", () => {
  it("should render a Controllers component", () => {
    render(<Controls />);

    screen.getByTestId("controllers");
  });

  it("should render a Timer component", () => {
    render(<Controls />);

    screen.getByTestId("timer");
  });

  it("should render a BitcoinValueFinder component", () => {
    render(<Controls />);

    screen.getByTestId("value-finder");
  });
});
