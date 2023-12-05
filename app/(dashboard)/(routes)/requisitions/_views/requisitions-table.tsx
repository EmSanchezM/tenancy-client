"use client";

import { FC } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, RequisitionColumn } from "./columns";

interface RequisitionsClientProps {
  data: RequisitionColumn[];
}

export const RequisitionsClient: FC<RequisitionsClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Requisiciones (${data.length})`} description="Gestione las requisiciones de su restaurante" />
        <Button onClick={() => router.push(`/requisitions/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nueva
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="status" columns={columns} data={data} />
    </>
  );
};