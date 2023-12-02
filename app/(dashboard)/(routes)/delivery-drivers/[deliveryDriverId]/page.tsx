import DeliveryDriverForm from "../_views/delivery-driver-form";
import { getDeliveryDriverById } from "@/lib/services/delivery-drivers";

interface DeliveryDriverParams {
  params: { deliveryDriverId: string }
}

export default async function DeliveryDriver({ params }: DeliveryDriverParams) {
  const { data: deliveryDriver } = await getDeliveryDriverById(params.deliveryDriverId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <DeliveryDriverForm deliveryDriver={deliveryDriver} />
    </main>
  )
}