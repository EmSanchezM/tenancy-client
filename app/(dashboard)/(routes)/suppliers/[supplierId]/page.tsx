import { getSupplierById } from "@/lib/services/supplier";
import SupplierForm from "../_views/supplier-form";

interface SupplierParams {
  params: { supplierId: string }
}

export default async function Supplier({ params }: SupplierParams) {
  const { data: supplier } = await getSupplierById(params.supplierId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <SupplierForm supplier={supplier} />
    </main>
  )
}