import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import user from "@testing-library/user-event";
import Bitcoin from "../Bitcoin";

describe("Bitcoin", () => {
  it("should render an image", () => {
    render(<Bitcoin />);

    screen.getByRole("img");
  });

  it("should render the coin in the non active css state when active is false", () => {
    render(<Bitcoin />);

    const img = screen.getByRole("img");
    expect(img).not.toHaveClass("up");
  });

  it("should render the coin in active css state when active is true", () => {
    render(<Bitcoin active={true} />);

    const img = screen.getByRole("img");
    //-0-2-2 is a jss thing
    expect(img).toHaveClass("up-0-2-2");
  });

  it("should fire the handleCoinClick method when img is clicked", () => {
    const handleCoinClickMock = jest.fn();
    render(<Bitcoin active={true} handleCoinClick={handleCoinClickMock} />);

    expect(handleCoinClickMock).not.toHaveBeenCalled();

    const img = screen.getByRole("img");
    user.click(img);
    expect(handleCoinClickMock).toHaveBeenCalled();
  });
});
