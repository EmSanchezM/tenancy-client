
import { getUnitOfMeasureById } from "@/lib/services/units-measure";
import UnitOfMeasureForm from "../_views/unit-form";

interface UnitOfMeasureParams {
  params: { unitId: string }
}

export default async function UnitOfMeasure({ params }: UnitOfMeasureParams) {
  const { data: unit } = await getUnitOfMeasureById(params.unitId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <UnitOfMeasureForm unit={unit} />
    </main>
  )
}