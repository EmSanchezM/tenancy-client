"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type UnitOfMeasureColumn = {
  id: string;
  name: string;
  symbol: string;
  factor: number;
  createdAt: string;
}

export const columns: ColumnDef<UnitOfMeasureColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "symbol",
    header: "Simbolo",
  },
  {
    accessorKey: "factor",
    header: "Factor",
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