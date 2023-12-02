import { format } from "date-fns";
import { UnitOfMeasureColumn } from "./_views/columns";
import { UnitsOfMeasureClient } from "./_views/units-table";

import { getAllUnitsOfMeasure } from "@/lib/services/units-measure";

export default async function UnitsOfMeasure() {
  const { data: units } = await getAllUnitsOfMeasure();

  const formattedUnits: UnitOfMeasureColumn[] = units.map((item) => ({
    id: item.id,
    name: item.name,
    symbol: item.symbol,
    factor: +item.factor,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <UnitsOfMeasureClient data={formattedUnits} />
    </main>
  )
}

