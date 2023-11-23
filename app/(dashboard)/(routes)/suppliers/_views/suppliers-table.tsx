"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, SupplierColumn } from "./columns";

interface SuppliersClientProps {
  data: SupplierColumn[];
}

export const SupplierClient: React.FC<SuppliersClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Proveedores (${data.length})`} description="Gestione los proveedores de su restaurante" />
        <Button onClick={() => router.push(`/suppliers/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nuevo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="firstName" columns={columns} data={data} />
    </>
  );
};