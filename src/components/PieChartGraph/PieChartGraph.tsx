import React, { FC } from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { BudgetData } from "../../types";

const PieChartGraph: FC<Props> = ({ budgetData }) => {
  const labels = budgetData
    ? budgetData.map((selection) => selection.name)
    : [];
  const data = budgetData ? budgetData.map((selection) => selection.value) : [];

  return (
    <PieContainer>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "#545863",
                "#00E8FC",
                "#F96E46",
                "#F9C846",
                "#FFE3E3",
              ],
            },
          ],
        }}
      />
    </PieContainer>
  );
};

interface Props {
  budgetData: BudgetData;
}

const PieContainer = styled.div`
  width: 300px;
  height: 300px;
`;

export default PieChartGraph;
