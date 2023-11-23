import { format } from "date-fns";
import { SupplierColumn } from "./_views/columns";
import { SupplierClient } from "./_views/suppliers-table";

import { getAllSuppliers } from "@/lib/services/supplier";

export default async function Suppliers() {
  const { data: suppliers } = await getAllSuppliers();

  const formattedSuppliers: SupplierColumn[] = suppliers.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    code: item.code,
    description: item.description,
    address: item.address,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <SupplierClient data={formattedSuppliers} />
    </main>
  )
}

