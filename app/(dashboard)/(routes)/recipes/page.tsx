import { format } from "date-fns";
import { RecipeColumn } from "./_views/columns";
import { RecipesClient } from "./_views/recipes-table";
import { Recipe } from "@/lib/models/recipe.model";
import { getAllRecipes } from "@/lib/services/recipes";

export default async function Recipes() {
  const { data: recipes } = await getAllRecipes();

  const formattedRecipes: RecipeColumn[] = recipes.map((item: Recipe) => ({
    id: item.id,
    name: item.name!,
    difficulty: item.difficulty.toString(),
    preparationTime: item.preparationTime.time ? `${item.preparationTime.time} ${item.preparationTime.unit}` : 'No definido',
    portions: item.portions,
    createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <main className="pt-20 md:pl-72 p-8">
      <RecipesClient data={formattedRecipes} />
    </main>
  )
}