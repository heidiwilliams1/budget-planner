export type BudgetData = { name: string; value: number }[];

export type Column = {
    accessorKey: "name" | "value" | undefined;
    header: string;
    size: number;
  };
  