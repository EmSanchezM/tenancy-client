"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, UnitOfMeasureColumn } from "./columns";

interface UnitsOfMeasureClientProps {
  data: UnitOfMeasureColumn[];
}

export const UnitsOfMeasureClient: React.FC<UnitsOfMeasureClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Unidades de medida (${data.length})`} description="Gestione los unidades de medida de los insumos para recetas de su restaurante" />
        <Button onClick={() => router.push(`/units-measure/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nueva
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};