import RequisitionForm from "../_views/requisition-form";

import { SelectFormat } from "@/lib/models/select-format.model";
import { getAllRawMaterials } from "@/lib/services/raw-material";
import { getAllUnitsOfMeasure } from "@/lib/services/units-measure";

export default async function CreateProduct() {
  const { data: rawMaterials } = await getAllRawMaterials();
  const { data: unitsOfMeasure } = await getAllUnitsOfMeasure();

  const formattedRawMaterials: SelectFormat[] = rawMaterials.map((item) => ({
    id: item.id,
    name: item.name
  }));

  const formattedUnits: SelectFormat[] = unitsOfMeasure.map((item) => ({
    id: item.id,
    name: item.name
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <RequisitionForm requisition={null} rawMaterials={formattedRawMaterials} unitsOfMeasure={formattedUnits} areas={[]} />
    </main>
  )
}