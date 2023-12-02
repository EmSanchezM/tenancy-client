import DeliveryDriverForm from "../_views/delivery-driver-form";

export default async function CreateDeliveryDriver() {
  return (
    <main className="pt-28 md:pl-72 p-8">
      <DeliveryDriverForm deliveryDriver={null} />
    </main>
  )
}