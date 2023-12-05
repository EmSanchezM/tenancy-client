"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type RecipeColumn = {
  id: string;
  name: string;
  portions: number;
  preparationTime: string;
  difficulty: string;
  createdAt: string;
}

export const columns: ColumnDef<RecipeColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "portions",
    header: "Porciones",
  },
  {
    accessorKey: "preparationTime",
    header: "Tiempo de preparación",
  },
  {
    accessorKey: "difficulty",
    header: "Dificultad",
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