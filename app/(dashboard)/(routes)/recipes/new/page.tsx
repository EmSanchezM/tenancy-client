import RecipeForm from "../_views/recipe-form";

import { getAllCategories } from "@/lib/services/categories";
import { getAllRawMaterials } from "@/lib/services/raw-material";
import { getAllProducts } from "@/lib/services/produts";
import { SelectFormat } from "@/lib/models/select-format.model";

export default async function CreateRecipe() {
  const { data: categories } = await getAllCategories({ isMenu: true });
  const { data: rawMaterials } = await getAllRawMaterials();
  const { data: products } = await getAllProducts();

  const formattedCategories: SelectFormat[] = categories.map((item) => ({
    id: item.id,
    name: item.name
  }));

  const formattedRawMaterials: SelectFormat[] = rawMaterials.map((item) => ({
    id: item.id,
    name: item.name
  }));

  const formattedProducts: SelectFormat[] = products.map((item) => ({
    id: item.id,
    name: item.name
  }));


  return (
    <main className="pt-20 md:pl-72 p-8">
      <RecipeForm recipe={null} categories={formattedCategories} rawMaterials={formattedRawMaterials} products={formattedProducts} />
    </main>
  )
}