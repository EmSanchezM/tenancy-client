import ProductForm from "../_views/product-form";

import { getProductById } from "@/lib/services/produts";
import { getAllCategories } from "@/lib/services/categories";
import { SelectFormat } from "@/lib/models/select-format.model";

interface ProductParams {
  params: { productId: string }
}

export default async function Product({ params }: ProductParams) {
  const { data: product } = await getProductById(params.productId);
  const { data: categories } = await getAllCategories({ isMenu: true });

  const formattedCategories: SelectFormat[] = categories.map((item) => ({
    id: item.id,
    name: item.name
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <ProductForm product={product} categories={formattedCategories} />
    </main>
  )
}