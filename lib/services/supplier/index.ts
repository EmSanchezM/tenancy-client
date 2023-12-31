import { Supplier } from "@/lib/models/supplier.model";
import { apiPrivate, errorHandler } from "../api.service";
import { SupplierFormValues } from "@/lib/validation-schemes/supplier.schema";

const getAllSuppliers = async () => {
  try {
    const { data } = await apiPrivate.get<Supplier[]>("suppliers");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getSupplierById = async (supplierId: string) => {
  try {
    const { data } = await apiPrivate.get<Supplier>(`suppliers/${supplierId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createSupplier = async (payload: SupplierFormValues) => {
  try {
    const { data } = await apiPrivate.post<Supplier>("suppliers", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateSupplier = async (
  supplierId: string,
  payload: Partial<SupplierFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<Supplier>(
      `suppliers/${supplierId}`,
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

const deleteSupplier = async (supplierId: string) => {
  try {
    const { data } = await apiPrivate.delete<Supplier>(
      `suppliers/${supplierId}`
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
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
