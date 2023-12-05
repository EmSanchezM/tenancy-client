import { apiPrivate, errorHandler } from "../api.service";
import { RawMaterial } from "@/lib/models/raw-material.model";
import { RawMaterialFormValues } from "@/lib/validation-schemes/raw-material.schema";

const getAllRawMaterials = async () => {
  try {
    const { data } = await apiPrivate.get<RawMaterial[]>("inventory/products");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getRawMaterialById = async (rawMaterialId: string) => {
  try {
    const { data } = await apiPrivate.get<RawMaterial>(
      `inventory/products/${rawMaterialId}`
    );

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createRawMaterial = async (payload: RawMaterialFormValues) => {
  try {
    const { data } = await apiPrivate.post<RawMaterial>(
      "inventory/products",
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

const updateRawMaterial = async (
  rawMaterialId: string,
  payload: Partial<RawMaterialFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<RawMaterial>(
      `inventory/products/${rawMaterialId}`,
      {
        ...payload,
        suppliers: [payload.suppliers],
        unitsOfMeasure: [payload.unitsOfMeasure],
      }
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

const deleteRawMaterial = async (rawMaterialId: string) => {
  try {
    const { data } = await apiPrivate.delete<RawMaterial>(
      `invertory/products/${rawMaterialId}`
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
  getAllRawMaterials,
  getRawMaterialById,
  createRawMaterial,
  updateRawMaterial,
  deleteRawMaterial,
};
