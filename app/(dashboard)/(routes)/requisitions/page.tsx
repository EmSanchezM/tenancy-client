import { format } from "date-fns";

import { RequisitionColumn } from "./_views/columns";
import { RequisitionsClient } from "./_views/requisitions-table";

import { Requisition } from "@/lib/models/requisition.model";
import { getAllRequisitions } from "@/lib/services/requisitions";

export default async function Requisitions() {
  const { data: requisitions } = await getAllRequisitions();

  const formattedRequisitions: RequisitionColumn[] = requisitions.map((item: Requisition) => ({
    id: item.id,
    status: item.status,
    dateToMeet: format(new Date(item.dateToMeet), 'dd/MM/yyyy'),
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <RequisitionsClient data={formattedRequisitions} />
    </main>
  )
}