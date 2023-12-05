"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"
import { STATUS_REQUISITION } from "@/lib/constants/status-requisition.constant";

export type RequisitionColumn = {
  id: string;
  dateToMeet: string;
  status: STATUS_REQUISITION;
  createdAt: string;
}

export const columns: ColumnDef<RequisitionColumn>[] = [
  {
    accessorKey: "status",
    header: "Estado de la requisición",
  },
  {
    accessorKey: "dateToMeet",
    header: "Fecha a cumplir",
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