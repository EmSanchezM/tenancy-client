import { format } from "date-fns";
import { getAllCustomers } from "@/lib/services/customers";
import { CustomerColumn } from "./_views/columns";
import { CustomersClient } from "./_views/customers-table";

export default async function Customers() {

  const { data: customers } = await getAllCustomers();

  const formattedCustomers: CustomerColumn[] = customers.map((item) => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <CustomersClient data={formattedCustomers} />
    </main>
  )
}

