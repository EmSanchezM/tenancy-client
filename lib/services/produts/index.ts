import { apiPrivate, errorHandler } from "../api.service";
import { Product } from "@/lib/models/product.model";
import { ProductFormValues } from "@/lib/validation-schemes/product.schema";

const getAllProducts = async () => {
  try {
    const { data } = await apiPrivate.get<Product[]>("products");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getProductById = async (productId: string) => {
  try {
    const { data } = await apiPrivate.get<Product>(`products/${productId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createProduct = async (payload: ProductFormValues) => {
  try {
    const { data } = await apiPrivate.post("products", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateProduct = async (productId: string, payload: ProductFormValues) => {
  try {
    const { data } = await apiPrivate.patch(`products/${productId}`, payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const deleteProduct = async (productId: string) => {
  try {
    const { data } = await apiPrivate.delete(`products/${productId}`);

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
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
