import { apiPrivate, errorHandler } from "../api.service";
import { Recipe } from "@/lib/models/recipe.model";
import { RecipeFormValues } from "@/lib/validation-schemes/recipes.schema";

const getAllRecipes = async () => {
  try {
    const { data } = await apiPrivate.get<Recipe[]>("recipes");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getRecipeById = async (recipeId: string) => {
  try {
    const { data } = await apiPrivate.get<Recipe>(`recipes/${recipeId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createRecipe = async (payload: RecipeFormValues) => {
  try {
    const { data } = await apiPrivate.post<Recipe>("recipes", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateRecipe = async (
  recipeId: string,
  payload: Partial<RecipeFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<Recipe>(
      `recipes/${recipeId}`,
      payload
    );

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const deleteRecipe = async (recipeId: string) => {
  try {
    const { data } = await apiPrivate.delete<Recipe>(`recipes/${recipeId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

export {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
