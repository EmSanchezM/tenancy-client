import { getProductById } from "@/lib/services/produts";
import ProductForm from "../_views/product-form";
import { getAllCategories } from "@/lib/services/categories";

interface ProductParams {
  params: { productId: string }
}

interface SelectCategories { id: string; name: string };

export default async function Product({ params }: ProductParams) {
  const { data: product } = await getProductById(params.productId);
  const { data: categories } = await getAllCategories();

  const formattedCategories: SelectCategories[] = categories.map((item) => ({
    id: item.id,
    name: item.name
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <ProductForm product={product} categories={formattedCategories} />
    </main>
  )
}