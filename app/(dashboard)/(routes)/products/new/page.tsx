import ProductForm from "../_views/product-form";

import { getAllCategories } from "@/lib/services/categories";
import { SelectFormat } from "@/lib/models/select-format.model";

export default async function CreateProduct() {
  const { data: categories } = await getAllCategories({ isMenu: true });

  const formattedCategories: SelectFormat[] = categories.map((item) => ({
    id: item.id,
    name: item.name
  }));


  return (
    <main className="pt-20 md:pl-72 p-8">
      <ProductForm product={null} categories={formattedCategories} />
    </main>
  )
}