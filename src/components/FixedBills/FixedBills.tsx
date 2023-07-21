import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { Button } from "../Button";
import { useIncomeContext } from "../../contexts/IncomeContext";

const FixedBills: FC = () => {
  const { setShowBudgetForm } = useIncomeContext();

  const [showBillsForm, setShowBillsForm] = useState(true);

  const {
    income,
    remainingSpend,
    setRemainingSpend,
    fixedBillsTotal,
    setFixedBillsTotal,
  } = useIncomeContext();

  const submitHandler = (event: any) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const totalBills =
      Number(data.get("rent")) +
      Number(data.get("energy")) +
      Number(data.get("water")) +
      Number(data.get("wifi")) +
      Number(data.get("council-tax")) +
      Number(data.get("loans")) +
      Number(data.get("other"));

    setFixedBillsTotal(totalBills);
    setShowBillsForm(false);
  };

  useEffect(() => {
    setRemainingSpend(income - fixedBillsTotal);
  }, [income, fixedBillsTotal, setRemainingSpend]);

  const updateHandler = () => {
    setShowBudgetForm(true);
    setShowBillsForm(true);
  };

  return (
    <Card>
      <h2>Fixed Outgoings</h2>
      {showBillsForm ? (
        <>
          <p>Add your bills for the month:</p>
          <StyledForm onSubmit={submitHandler}>
            <StyledLabel>
              Mortgage/Rent:
              <StyledInput data-testid="rent-input" type="number" name="rent" />
            </StyledLabel>
            <StyledLabel>
              Energy:
              <StyledInput
                data-testid="energy-input"
                type="number"
                name="energy"
              />
            </StyledLabel>
            <StyledLabel>
              Water:
              <StyledInput
                data-testid="water-input"
                type="number"
                name="water"
              />
            </StyledLabel>
            <StyledLabel>
              Wifi:
              <StyledInput type="number" name="wifi" />
            </StyledLabel>
            <StyledLabel>
              Council Tax:
              <StyledInput type="number" name="council-tax" />
            </StyledLabel>
            <StyledLabel>
              Loan Repayments:
              <StyledInput type="number" name="loans" />
            </StyledLabel>
            <StyledLabel>
              Other:
              <StyledInput type="number" name="other" />
            </StyledLabel>
            <Button type="submit">Submit</Button>
          </StyledForm>
        </>
      ) : (
        <StyledTotalBillsContainer>
          <p>Total Fixed bills: £{fixedBillsTotal}</p>
          <Button onClick={updateHandler}>Update</Button>
          <p>Money Remaning to spend on fun things: £{remainingSpend}</p>
        </StyledTotalBillsContainer>
      )}
    </Card>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`;

const StyledInput = styled.input`
  margin-left: 10px;
`;

const StyledTotalBillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default FixedBills;
