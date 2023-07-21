import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BudgetTracker from "../BudgetTracker";
import IncomeContextProvider from "../contexts/IncomeContext";

describe("BudgetTracker", () => {
  it("renders title", () => {
    render(
      <IncomeContextProvider>
        <BudgetTracker />
      </IncomeContextProvider>
    );

    const title = screen.getByText("Budget Planner");
    expect(title).toBeInTheDocument();
  });

  it("initially renders income submission form", () => {
    render(
      <IncomeContextProvider>
        <BudgetTracker />
      </IncomeContextProvider>
    );

    const incomeForm = screen.getByText("Add your income (after tax) (£):");
    expect(incomeForm).toBeInTheDocument();
  });
});
