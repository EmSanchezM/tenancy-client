"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type EmployeeColumn = {
  id: string
  firstName: string;
  lastName: string;
  createdAt: string;
}

export const columns: ColumnDef<EmployeeColumn>[] = [
  {
    accessorKey: "firstName",
    header: "Nombre",
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de creación",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];