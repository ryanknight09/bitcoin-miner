import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import BitcoinValueFinder from "../BitcoinValueFinder";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const mockFetch = Promise.resolve({
  json: () =>
    Promise.resolve({
      bpi: {
        USD: {
          code: "USD",
          rate: "34,213.35",
          rate_float: 34213.35,
        },
      },
    }),
});

describe("BitcoinValueFinder", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the loading state of current bitcoin price", () => {
    render(<BitcoinValueFinder />);
    screen.getByText("BTC/USD fetching latest...");
  });

  it("should render the current bitcoin price", async () => {
    jest.spyOn(window, "fetch").mockImplementationOnce(() => mockFetch);

    render(<BitcoinValueFinder />);

    await screen.findByText("BTC/USD $34,213.35");
  });

  it("should show the current number of bitcoins mined", () => {
    const bitcoins = 5;

    render(<BitcoinValueFinder bitcoins={bitcoins} />);
    screen.getByText(`Bitcoins ${bitcoins}`);
  });

  it("should render the current value of mined bitcoin", async () => {
    const bitcoins = 5;
    const mockBitcoinValue = formatter.format(bitcoins * 34213.35);
    jest.spyOn(window, "fetch").mockImplementationOnce(() => mockFetch);

    render(<BitcoinValueFinder bitcoins={bitcoins} />);

    await screen.findByText(`Value ${mockBitcoinValue}`);
  });
});
