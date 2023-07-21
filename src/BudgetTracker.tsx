import React from "react";
import Title from "./components/Title/Title";
import { IncomeForm } from "./components/IncomeForm";
import { FixedBills } from "./components/FixedBills";
import { BudgetPlan } from "./components/BudgetPlan";
import { useIncomeContext } from "./contexts/IncomeContext";

const BudgetTracker = () => {
  const { income, fixedBillsTotal } = useIncomeContext();

  return (
    <div>
      <Title />
      <IncomeForm />
      {income ? <FixedBills /> : null}
      {fixedBillsTotal ? <BudgetPlan /> : null}
    </div>
  );
};

export default BudgetTracker;
