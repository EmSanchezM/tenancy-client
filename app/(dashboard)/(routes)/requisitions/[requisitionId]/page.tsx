import RequisitionForm from "../_views/requisition-form";

import { getAllRawMaterials } from "@/lib/services/raw-material";
import { getAllUnitsOfMeasure } from "@/lib/services/units-measure";
import { SelectFormat } from "@/lib/models/select-format.model";
import { getRequisitionById } from "@/lib/services/requisitions";

interface RequisitionParams {
  params: { requisitionId: string }
}

export default async function Requisition({ params }: RequisitionParams) {
  const { data: requisition } = await getRequisitionById(params.requisitionId);
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
      <RequisitionForm requisition={requisition} rawMaterials={formattedRawMaterials} unitsOfMeasure={formattedUnits} areas={[]} />
    </main>
  )
}