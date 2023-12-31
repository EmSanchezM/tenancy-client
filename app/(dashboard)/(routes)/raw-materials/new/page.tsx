import RawMaterialForm from "../_views/raw-material-form";

import { getAllCategories } from "@/lib/services/categories";
import { getAllSuppliers } from "@/lib/services/supplier";
import { getAllUnitsOfMeasure } from "@/lib/services/units-measure";
import { SelectFormat } from "@/lib/models/select-format.model";

export default async function CreateRawMaterial() {
  const { data: categories } = await getAllCategories({ isMenu: false });
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
      <RawMaterialForm rawMaterial={null} categories={formattedCategories} suppliers={formattedSuppliers} unitsOfMeasure={formattedUnitsOfMeasure} />
    </main>
  )
}