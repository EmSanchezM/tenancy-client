"use client";

import { FC } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, RecipeColumn } from "./columns";

interface RecipesClientProps {
  data: RecipeColumn[];
}

export const RecipesClient: FC<RecipesClientProps> = ({
  data
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Recetas (${data.length})`} description="Gestione las recetas de su restaurante" />
        <Button onClick={() => router.push(`/recipes/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar Nueva
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};