import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";

describe("Card", () => {
  it("renders card with children", () => {
    render(<Card>Card Contents</Card>);

    const title = screen.getByText("Card Contents");
    expect(title).toBeInTheDocument();
  });
});
