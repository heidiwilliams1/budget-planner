import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BudgetTable from "../BudgetTable";

const mockBudgetData = [
  {
    name: "Meals",
    value: 50,
  },
  {
    name: "Shopping",
    value: 121,
  },
  {
    name: "Other",
    value: 430,
  },
  {
    name: "Savings",
    value: 233,
  },
  {
    name: "Holidays",
    value: 154,
  },
];

describe("BudgetTable", () => {
  it("Renders headings", () => {
    render(<BudgetTable budgetData={mockBudgetData} />);

    expect(screen.getByText("Amount (£)")).toBeInTheDocument();
    expect(screen.getByText("Allocation")).toBeInTheDocument();
  });

  it("Renders the data", () => {
    const table = render(<BudgetTable budgetData={mockBudgetData} />);

    expect(screen.getByText("Meals")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();

    expect(screen.getByText("Shopping")).toBeInTheDocument();
    expect(screen.getByText("121")).toBeInTheDocument();

    expect(screen.getByText("Other")).toBeInTheDocument();
    expect(screen.getByText("430")).toBeInTheDocument();

    expect(screen.getByText("Savings")).toBeInTheDocument();
    expect(screen.getByText("233")).toBeInTheDocument();

    expect(screen.getByText("Holidays")).toBeInTheDocument();
    expect(screen.getByText("154")).toBeInTheDocument();
  });
});
