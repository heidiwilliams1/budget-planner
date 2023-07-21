import React, { FC, useMemo } from "react";
import "chart.js/auto";
import { MaterialReactTable } from "material-react-table";
import { BudgetData, Column } from "../../types";

const BudgetTable: FC<Props> = ({ budgetData }) => {
  const columns = useMemo<Column[]>(
    () => [
      {
        accessorKey: "name",
        header: "Allocation",
        size: 150,
      },
      {
        accessorKey: "value",
        header: "Amount (£)",
        size: 150,
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={budgetData}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableHeadCellProps={{
        sx: {
          border: "1px solid #3b5249",
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: "1px solid #3b5249",
        },
      }}
    />
  );
};

interface Props {
  budgetData: BudgetData;
}

export default BudgetTable;
