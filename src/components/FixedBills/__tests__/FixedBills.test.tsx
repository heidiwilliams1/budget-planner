import React, { useEffect } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FixedBills from "../FixedBills";
import IncomeContextProvider, {
  useIncomeContext,
} from "../../../contexts/IncomeContext";

describe("FixedBills", () => {
  beforeEach(() => {
    render(
      <IncomeContextProvider>
        <FixedBills />
      </IncomeContextProvider>
    );
  });

  it("renders heading", () => {
    expect(screen.getByText("Fixed Outgoings")).toBeInTheDocument();
  });

  it("renders form", () => {
    expect(
      screen.getByText("Add your bills for the month:")
    ).toBeInTheDocument();
  });

  it("sets fixedBillsTotal to the total form input on submit", async () => {
    const rent = screen.getByTestId("rent-input");
    fireEvent.change(rent, {
      target: { value: 100 },
    });

    const energy = screen.getByTestId("energy-input");
    fireEvent.change(energy, {
      target: { value: 50 },
    });

    const water = screen.getByTestId("water-input");
    fireEvent.change(water, {
      target: { value: 25 },
    });

    const button = screen.getByText("Submit");

    await waitFor(() => fireEvent.click(button));

    expect(screen.getByText("Total Fixed bills: £175")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
  });
});
