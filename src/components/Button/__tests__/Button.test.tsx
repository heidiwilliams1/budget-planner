import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockClick = jest.fn();

    render(<Button onClick={mockClick}>Click Me</Button>);

    const button = screen.getByText("Click Me");

    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("sets correct type", () => {
    render(<Button type="submit">Click Me</Button>);

    const button = screen.getByText("Click Me");

    expect(button).toHaveAttribute("type", "submit");
  });

  it("sets disabled correctly", () => {
    render(<Button disabled={true}>Click Me</Button>);

    const button = screen.getByText("Click Me");

    expect(button).toHaveAttribute("disabled");
  });
});
