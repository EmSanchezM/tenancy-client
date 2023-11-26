"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, BranchColumn } from "./columns";

interface BranchesClientProps {
  data: BranchColumn[];
}

export const BranchesClient: React.FC<BranchesClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Sucursales (${data.length})`} description="Gestione las sucursales de su restaurante" />
        <Button onClick={() => router.push(`/branches/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nuevo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};