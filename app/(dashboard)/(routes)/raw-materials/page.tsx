import { format } from "date-fns";
import { RawMaterialsClient } from "./_views/raw-materials-table";
import { RawMaterialColumn } from "./_views/columns";
import { formatPrice } from "@/lib/utils";
import { RawMaterial } from "@/lib/models/raw-material.model";
import { getAllRawMaterials } from "@/lib/services/raw-material"

export default async function RawMaterials() {
  const { data: rawMaterials } = await getAllRawMaterials();

  const formattedRawMaterials: RawMaterialColumn[] = rawMaterials.map((item: RawMaterial) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item?.price ? formatPrice(+item?.price) : '0',
    costPrice: item?.costPrice ? formatPrice(+item?.costPrice) : '0',
    category: item.category ? item.category?.name : 'No category',
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <RawMaterialsClient data={formattedRawMaterials} />
    </main>
  )
}