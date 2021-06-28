import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import Header from "../Header";

describe("Header", () => {
  it("should render the correct copy", () => {
    render(<Header />);

    screen.getByText(/The/i);
    screen.getByText(/bitcoin-mining/i);
    screen.getByText(/network/i);
  });
});
