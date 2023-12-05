"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type RawMaterialColumn = {
  id: string;
  name: string;
  price: string;
  costPrice: string;
  category: string;
  createdAt: string;
}

export const columns: ColumnDef<RawMaterialColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "description",
    header: "Descripcion",
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "costPrice",
    header: "Precio de costo",
  },
  {
    accessorKey: "category",
    header: "Categoría",
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