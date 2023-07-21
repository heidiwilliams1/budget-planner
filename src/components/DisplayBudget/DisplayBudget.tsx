import React, { FC } from "react";
import "chart.js/auto";
import styled from "styled-components";
import { BudgetData } from "../../types";
import { BudgetTable } from "../BudgetTable";
import { PieChartGraph } from "../PieChartGraph";

const DisplayBudget: FC<Props> = ({ budgetData }) => {
  return (
    <StyledBudgetDisplayContainer>
      <BudgetTable budgetData={budgetData} />
      <PieChartGraph budgetData={budgetData} />
    </StyledBudgetDisplayContainer>
  );
};

interface Props {
  budgetData: BudgetData;
}

const StyledBudgetDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default DisplayBudget;
