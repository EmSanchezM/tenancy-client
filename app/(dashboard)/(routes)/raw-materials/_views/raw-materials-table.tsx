"use client";

import { FC } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, RawMaterialColumn } from "./columns";

interface RawMaterialsClientProps {
  data: RawMaterialColumn[];
}

export const RawMaterialsClient: FC<RawMaterialsClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Insumos (${data.length})`} description="Gestione los insumos o materias primas de su restaurante" />
        <Button onClick={() => router.push(`/raw-materials/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nuevo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};