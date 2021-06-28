import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../testUtils";
import Button from "../Button";
import user from "@testing-library/user-event";

describe("Button", () => {
  it("should render a button with the correct text", () => {
    const buttonText = "click me!";
    render(<Button>{buttonText}</Button>);

    screen.getByText(buttonText);
  });

  it("should call the onClick handler passed in", () => {
    const onClickhandler = jest.fn();
    render(<Button onClick={onClickhandler}></Button>);

    const button = screen.getByRole("button");
    user.click(button);
    expect(onClickhandler).toHaveBeenCalled();
  });
});
