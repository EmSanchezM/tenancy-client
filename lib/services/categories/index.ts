import { apiPrivate, errorHandler } from "../api.service";
import { Category, QueryParamsCategory } from "@/lib/models/category.model";
import { CategoryFormValues } from "@/lib/validation-schemes/category.schema";

const getAllCategories = async (params?: QueryParamsCategory) => {
  try {
    const { data } = await apiPrivate.get<Category[]>("categories", { params });

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getCategoryById = async (categoryId: string) => {
  try {
    const { data } = await apiPrivate.get<Category>(`categories/${categoryId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createCategory = async (payload: CategoryFormValues) => {
  try {
    const { data } = await apiPrivate.post<Category>("categories", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateCategory = async (
  categoryId: string,
  payload: Partial<CategoryFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<Category>(
      `categories/${categoryId}`,
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

const deleteCategory = async (categoryId: string) => {
  try {
    const { data } = await apiPrivate.delete<Category>(
      `categories/${categoryId}`
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

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
