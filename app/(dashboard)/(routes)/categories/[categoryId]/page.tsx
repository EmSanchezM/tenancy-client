
import CategoryForm from "../_views/category-form";
import { getCategoryById } from "@/lib/services/categories";

interface CategoryParams {
  params: { categoryId: string }
}

export default async function Category({ params }: CategoryParams) {
  const { data: category } = await getCategoryById(params.categoryId);

  return (
    <main className="pt-28 md:pl-72 p-8">
      <CategoryForm category={category} />
    </main>
  )
}