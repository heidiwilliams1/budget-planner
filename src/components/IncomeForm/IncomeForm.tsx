import React, { FC, useState } from "react";
import styled from "styled-components";
import { useIncomeContext } from "../../contexts/IncomeContext";
import { Button } from "../Button";

const IncomeForm: FC = () => {
  const { income, setIncome, setShowBudgetForm } = useIncomeContext();
  const [showIncomeForm, setShowIncomeForm] = useState(true);

  const showFormHandler = () => {
    setShowBudgetForm(true);
    setShowIncomeForm(true);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    setIncome(event.target[0].value);
    setShowIncomeForm(false);
  };

  return (
    <StyledIncomeInfoContainer>
      {income ? (
        <p>
          Monthly Income: <b>£{income}</b>
        </p>
      ) : null}

      {showIncomeForm ? (
        <StyledFormContainer>
          <StyledForm onSubmit={submitHandler}>
            <StyledLabel>Add your income (after tax) (£):</StyledLabel>
            <StyledInput
              data-testid="income-input"
              type="number"
              name="income"
              value={income !== 0 ? income : ""}
            />
            <Button type="submit">Submit</Button>
          </StyledForm>
        </StyledFormContainer>
      ) : (
        <Button onClick={showFormHandler}>Update</Button>
      )}
    </StyledIncomeInfoContainer>
  );
};

const StyledIncomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin: 15px;
`;

const StyledInput = styled.input`
  margin: 15px;
`;

export default IncomeForm;
