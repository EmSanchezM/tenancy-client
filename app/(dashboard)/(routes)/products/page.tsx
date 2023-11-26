import { getAllProducts } from "@/lib/services/produts"
import { format } from "date-fns";
import { ProductColumn } from "./_views/columns";
import { Product, VariantProduct } from "@/lib/models/product.model";
import { ProductsClient } from "./_views/products-table";
import { formatPrice } from "@/lib/utils";

export default async function Products() {
  const { data: products } = await getAllProducts();

  const formattedVariant = (variants: VariantProduct[]) => {
    const format = variants.map(variant => (` ${variant.name} - L.${variant.price}`));
    return format.join(',');
  }

  const formattedProducts: ProductColumn[] = products.map((item: Product) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item?.price ? formatPrice(+item?.price) : '0',
    category: item.category ? item.category?.name : 'No category',
    variants: item.variants ? formattedVariant(item.variants) : 'No hay variantes',
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <ProductsClient data={formattedProducts} />
    </main>
  )
}