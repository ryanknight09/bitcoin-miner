import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import ASICMiner from "../ASICMiner";

describe("ASICMiner", () => {
  it("should render an image", () => {
    render(<ASICMiner />);

    screen.getByRole("img");
  });
});
