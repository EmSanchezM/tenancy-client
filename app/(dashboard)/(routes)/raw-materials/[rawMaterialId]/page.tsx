import RawMaterialForm from "../_views/raw-material-form";

import { getAllCategories } from "@/lib/services/categories";
import { getAllSuppliers } from '@/lib/services/supplier';
import { getRawMaterialById } from "@/lib/services/raw-material";
import { getAllUnitsOfMeasure } from "@/lib/services/units-measure";
import { SelectFormat } from "@/lib/models/select-format.model";

interface ProductParams {
  params: { rawMaterialId: string }
}

export default async function Product({ params }: ProductParams) {
  const { data: rawMaterial } = await getRawMaterialById(params.rawMaterialId);
  const { data: categories } = await getAllCategories();
  const { data: suppliers } = await getAllSuppliers();
  const { data: units } = await getAllUnitsOfMeasure();

  const formattedCategories: SelectFormat[] = categories.map((item) => ({
    id: item.id,
    name: item.name
  }));

  const formattedSuppliers: SelectFormat[] = suppliers.map((item) => ({
    id: item.id,
    name: item.name
  }));

  const formattedUnitsOfMeasure: SelectFormat[] = units.map((item) => ({
    id: item.id,
    name: item.name
  }));


  return (
    <main className="pt-20 md:pl-72 p-8">
      <RawMaterialForm rawMaterial={rawMaterial} categories={formattedCategories} suppliers={formattedSuppliers} unitsOfMeasure={formattedUnitsOfMeasure} />
    </main>
  )
}