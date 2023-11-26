import { format } from "date-fns";
import { CategoryColumn } from "./_views/columns";
import { CategoriesClient } from "./_views/categories-table";

import { getAllCategories } from "@/lib/services/categories";

export default async function Categories() {
  const { data: categories } = await getAllCategories();

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-28 md:pl-72 p-8">
      <CategoriesClient data={formattedCategories} />
    </main>
  )
}

