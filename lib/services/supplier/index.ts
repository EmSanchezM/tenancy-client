import { CreateSupplierDto, Supplier } from "@/lib/models/supplier.model";
import { apiPrivate, errorHandler } from "../api.service";

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

const createSupplier = async (payload: CreateSupplierDto) => {
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
  supplierID: string,
  payload: Partial<CreateSupplierDto>
) => {
  try {
    const { data } = await apiPrivate.patch<Supplier>(
      `suppliers/${supplierID}`,
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

const deleteSupplier = async (supplierID: string) => {
  try {
    const { data } = await apiPrivate.delete<Supplier>(
      `suppliers/${supplierID}`
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

export { getAllSuppliers, createSupplier, updateSupplier, deleteSupplier };
