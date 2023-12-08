"use client";

import { FC } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, PrinterColumn } from "./columns";

interface PrintersClientProps {
  data: PrinterColumn[];
}

export const PrintersClient: FC<PrintersClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Impresoras (${data.length})`} description="Gestione las impresoras de su restaurante" />
        <Button onClick={() => router.push(`/printers/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nueva
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};