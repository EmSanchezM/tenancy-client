import { getRecipeById } from "@/lib/services/recipes";
import RecipeForm from "../_views/recipe-form";
import { getAllCategories } from "@/lib/services/categories";
import { getAllRawMaterials } from "@/lib/services/raw-material";
import { getAllProducts } from "@/lib/services/produts";
import { SelectFormat } from "@/lib/models/select-format.model";

interface RecipeParams {
  params: { recipeId: string }
}

export default async function Recipe({ params }: RecipeParams) {
  const { data: recipe } = await getRecipeById(params.recipeId);
  const { data: categories } = await getAllCategories();
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
      <RecipeForm recipe={recipe} categories={formattedCategories} rawMaterials={formattedRawMaterials} products={formattedProducts} />
    </main>
  )
}