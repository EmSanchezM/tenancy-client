"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type SupplierColumn = {
  id: string;
  name: string;
  email: string;
  phone: string;
  code: string;
  description: string;
  address: string;
  createdAt: string;
}

export const columns: ColumnDef<SupplierColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Telefono",
  },
  {
    accessorKey: "code",
    header: "Codigo",
  },
  {
    accessorKey: "description",
    header: "Descripcion",
  },
  {
    accessorKey: "address",
    header: "Dirección",
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