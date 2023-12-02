import { format } from "date-fns";
import { DeliveryDriverColumn } from "./_views/columns";
import { DeliveryDriversClient } from "./_views/delivery-drivers-table";

import { getAllDeliveryDrivers } from "@/lib/services/delivery-drivers";

export default async function DeliveryDrivers() {
  const { data: drivers } = await getAllDeliveryDrivers();

  const formattedDrivers: DeliveryDriverColumn[] = drivers.map((item) => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <DeliveryDriversClient data={formattedDrivers} />
    </main>
  )
}

