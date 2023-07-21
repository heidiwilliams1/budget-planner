import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IncomeState = {
  income: number | undefined;
  setIncome: Dispatch<SetStateAction<undefined>>;
  remainingSpend: number | undefined;
  setRemainingSpend: Dispatch<SetStateAction<undefined>>;
  fixedBillsTotal: number | undefined;
  setFixedBillsTotal: Dispatch<SetStateAction<undefined>>;
  showBudgetForm: boolean | undefined;
  setShowBudgetForm: Dispatch<SetStateAction<boolean>>;
};

const IncomeContext = createContext<IncomeState | undefined>(undefined);

const IncomeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [income, setIncome] = useState();
  const [remainingSpend, setRemainingSpend] = useState();
  const [fixedBillsTotal, setFixedBillsTotal] = useState();
  const [showBudgetForm, setShowBudgetForm] = useState(true);

  return (
    <IncomeContext.Provider
      value={{
        income,
        setIncome,
        remainingSpend,
        setRemainingSpend,
        fixedBillsTotal,
        setFixedBillsTotal,
        showBudgetForm,
        setShowBudgetForm,
      }}
    >
      {children}
    </IncomeContext.Provider>
  );
};

export function useIncomeContext(): any {
  const context = useContext(IncomeContext);
  if (context === undefined) {
    throw new Error(
      "useIncomeContext must be rendered in a tree within a IncomeContextProvider"
    );
  }
  return context;
}

export default IncomeContextProvider;
