import { format } from "date-fns";
import { getAllCustomers } from "@/lib/services/customers";
import { BranchColumn } from "./_views/columns";
import { BranchesClient } from "./_views/branches-table";

export default async function Branches() {
  const { data: customers } = await getAllCustomers();

  const formattedCustomers: BranchColumn[] = customers.map((item) => ({
    id: item.id,
    name: item.firstName,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <BranchesClient data={formattedCustomers} />
    </main>
  )
}

