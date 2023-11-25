import { getCustomerById } from "@/lib/services/customers";
import CustomerForm from "../_views/customer-form";

interface CustomerParams {
  params: { customerId: string }
}

export default async function Customer({ params }: CustomerParams) {

  const { data: customer } = await getCustomerById(params.customerId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <CustomerForm customer={customer} />
    </main>
  )
}