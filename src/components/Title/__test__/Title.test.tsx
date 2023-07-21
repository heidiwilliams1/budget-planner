import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "../Title";

describe("Title", () => {
  it("renders text", () => {
    render(<Title />);

    const title = screen.getByText("Budget Planner");
    expect(title).toBeInTheDocument();
  });
});
