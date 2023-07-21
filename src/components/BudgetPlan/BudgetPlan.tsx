import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useIncomeContext } from "../../contexts/IncomeContext";
import { Card } from "../Card";
import { Button } from "../Button";
import { BudgetData } from "../../types";
import { DisplayBudget } from "../DisplayBudget";

const BudgetPlan = () => {
  const { remainingSpend, showBudgetForm, setShowBudgetForm } =
    useIncomeContext();

  const [remaining, setRemaining] = useState(remainingSpend);
  const [budget, setBudget] = useState<BudgetData>([]);

  const [meals, setMeals] = useState(0);
  const [shopping, setShopping] = useState(0);
  const [other, setOther] = useState(0);
  const [savings, setSavings] = useState(0);
  const [holidays, setHolidays] = useState(0);

  useEffect(() => {
    setBudget([
      { name: "Meals", value: meals },
      { name: "Shopping", value: shopping },
      { name: "Other", value: other },
      { name: "Savings", value: savings },
      { name: "Holidays", value: holidays },
    ]);
  }, [meals, shopping, savings, holidays, other]);

  useEffect(() => {
    setRemaining(remainingSpend);
  }, [remainingSpend]);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setShowBudgetForm(false);
  };

  const editBudgetHandler = () => {
    setShowBudgetForm(true);
  };

  const isButtonDisabled =
    remaining - meals - shopping - holidays - savings - other === 0
      ? false
      : true;

  return (
    <div>
      {showBudgetForm ? (
        <Card>
          <h3>
            Now use the money remaining to plan your budget for the month!
          </h3>
          {remaining - meals - shopping - holidays - savings - other > 0 ? (
            <Remaining>
              <b>
                £{remaining - meals - shopping - holidays - savings - other}
              </b>
              &nbsp;remaining to allocate!
            </Remaining>
          ) : remaining - meals - shopping - holidays - savings - other ===
            0 ? (
            <NoneRemaining>All budget allocated!</NoneRemaining>
          ) : (
            <Overspend>
              Remove £
              {remaining - meals - shopping - holidays - savings - other}
            </Overspend>
          )}
          <StyledForm onSubmit={submitHandler}>
            <StyledRow>
              <StyledLabel>Meals out</StyledLabel>
              <StyledInput
                data-testid="meals-input"
                type="number"
                name="meals"
                value={meals !== 0 ? meals : ""}
                onChange={(e: any) => setMeals(e.target.value)}
              />
            </StyledRow>

            <StyledRow>
              <StyledLabel>Shopping</StyledLabel>
              <StyledInput
                data-testid="shopping-input"
                type="number"
                name="shopping"
                value={shopping !== 0 ? shopping : ""}
                onChange={(e: any) => setShopping(e.target.value)}
              />
            </StyledRow>

            <StyledRow>
              <StyledLabel>Holidays</StyledLabel>
              <StyledInput
                data-testid="holidays-input"
                type="number"
                name="holidays"
                value={holidays !== 0 ? holidays : ""}
                onChange={(e: any) => setHolidays(e.target.value)}
              />
            </StyledRow>

            <StyledRow>
              <StyledLabel>Other</StyledLabel>
              <StyledInput
                data-testid="other-input"
                type="number"
                name="other"
                value={other !== 0 ? other : ""}
                onChange={(e: any) => setOther(e.target.value)}
              />
            </StyledRow>

            <StyledRow>
              <StyledLabel>Savings</StyledLabel>
              <StyledInput
                data-testid="savings-input"
                type="number"
                name="savings"
                value={savings !== 0 ? savings : ""}
                onChange={(e: any) => setSavings(e.target.value)}
              />
            </StyledRow>

            <Button type="submit" disabled={isButtonDisabled}>
              Submit
            </Button>
          </StyledForm>
        </Card>
      ) : (
        <Card>
          <DisplayBudget budgetData={budget} />
          <Button onClick={editBudgetHandler}>Edit Budget</Button>
        </Card>
      )}
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  width: 100px;
`;

const StyledInput = styled.input`
  margin: 0 10px;
  max-width: 80px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 325x;
  margin: 5px;
`;

const Remaining = styled.p`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  color: black;
  width: 250px;
  text-align: center;
`;

const NoneRemaining = styled.p`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  color: green;
  width: 250px;
  text-align: center;
`;

const Overspend = styled.p`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  color: red;
  width: 250px;
  text-align: center;
`;

export default BudgetPlan;
