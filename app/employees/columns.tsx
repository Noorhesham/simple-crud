"use client";

import { ColumnDef } from "@tanstack/react-table";
import { EmployeeProps } from "../models/employeeModel";
import Actions from "../components/Actions";

export const columns: ColumnDef<EmployeeProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    id: "actions",
    cell: ({ row }) => <Actions data={row.original} />,
  },
];
