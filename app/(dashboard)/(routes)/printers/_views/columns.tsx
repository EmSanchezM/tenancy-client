"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type PrinterColumn = {
  id: string
  name: string;
  ipAddress: string;
  createdAt: string;
}

export const columns: ColumnDef<PrinterColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "ipAddress",
    header: "Dirección IP",
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