import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BudgetTracker from "./BudgetTracker";
import IncomeContextProvider from "./contexts/IncomeContext";

const root = ReactDOM.createRoot(
  document.getElementById("budget-app-root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IncomeContextProvider>
      <BudgetTracker />
    </IncomeContextProvider>
  </React.StrictMode>
);
