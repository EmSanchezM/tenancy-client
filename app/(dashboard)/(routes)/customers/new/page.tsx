import CustomerForm from "../_views/customer-form";

export default async function CreateCustomer() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <CustomerForm customer={null} />
    </main>
  )
}