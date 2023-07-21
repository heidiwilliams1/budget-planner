import React, { useEffect } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BudgetPlan from "../BudgetPlan";
import IncomeContextProvider, {
  useIncomeContext,
} from "../../../contexts/IncomeContext";

jest.mock("react-chartjs-2", () => ({
  Pie: () => null,
}));

const TestConsumer = () => {
  const { setRemainingSpend } = useIncomeContext();
  useEffect(() => {
    setRemainingSpend(1000);
  }, []);

  return <BudgetPlan />;
};

describe("BudgetPlan", () => {
  beforeEach(() => {
    render(
      <IncomeContextProvider>
        <TestConsumer />
      </IncomeContextProvider>
    );
  });

  it("renders form to enter budget", () => {
    const form = screen.getByText(
      "Now use the money remaining to plan your budget for the month!"
    );
    expect(form).toBeInTheDocument();
  });

  it("disables button when all budget has not been allocated", () => {
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("disabled");
  });

  it("updates remamining to be allocated when filling in the form", () => {
    const input = screen.getByTestId("meals-input");
    fireEvent.change(input, {
      target: { value: 100 },
    });

    expect(screen.getByText("£900")).toBeInTheDocument();
    expect(screen.getByText("remaining to allocate!")).toBeInTheDocument();
  });

  it("when remaining = 0, the submit button is not disabled", () => {
    const input = screen.getByTestId("meals-input");
    fireEvent.change(input, {
      target: { value: 1000 },
    });

    const button = screen.getByText("Submit");
    expect(button).not.toHaveAttribute("disabled");
  });

  it("when remaining > 0, amount to remove is displayed", () => {
    const input = screen.getByTestId("meals-input");
    fireEvent.change(input, {
      target: { value: 1100 },
    });

    expect(screen.getByText("Remove £-100")).toBeInTheDocument();
  });

  it("when remaining = 0 and submit button is clicked, the form is hidden and budget is displayed", async () => {
    const input = screen.getByTestId("meals-input");
    fireEvent.change(input, {
      target: { value: 1000 },
    });

    const button = screen.getByText("Submit");

    expect(button).not.toHaveAttribute("disabled");

    await waitFor(() => fireEvent.click(button));

    expect(screen.getByText("Edit Budget")).toBeInTheDocument();
  });
});
