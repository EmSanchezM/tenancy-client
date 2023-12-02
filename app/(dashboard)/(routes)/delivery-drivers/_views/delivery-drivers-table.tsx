"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, DeliveryDriverColumn } from "./columns";

interface DeliveryDriversClientProps {
  data: DeliveryDriverColumn[];
}

export const DeliveryDriversClient: React.FC<DeliveryDriversClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Conductores (${data.length})`} description="Gestione los conductores de entregas a domiciolio de su restaurante" />
        <Button onClick={() => router.push(`/delivery-drivers/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nuevo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="firstName" columns={columns} data={data} />
    </>
  );
};