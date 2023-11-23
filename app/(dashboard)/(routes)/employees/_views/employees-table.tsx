"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, EmployeeColumn } from "./columns";

interface EmployeesClientProps {
  data: EmployeeColumn[];
}

export const EmployeesClient: React.FC<EmployeesClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Empleados (${data.length})`} description="Gestione los empleados de su restaurante" />
        <Button onClick={() => router.push(`/employees/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nuevo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="firstName" columns={columns} data={data} />
    </>
  );
};