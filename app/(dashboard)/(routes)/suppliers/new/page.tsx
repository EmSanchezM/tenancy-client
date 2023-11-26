import SupplierForm from "../_views/supplier-form";

export default async function CreateSupplier() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <SupplierForm supplier={null} />
    </main>
  )
}