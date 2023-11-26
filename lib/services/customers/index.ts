import { Customer } from "@/lib/models/customer.model";
import { apiPrivate, errorHandler } from "../api.service";
import { CustomerFormValues } from "@/lib/validation-schemes/customer.schema";

const getAllCustomers = async () => {
  try {
    const { data } = await apiPrivate.get<Customer[]>("customers");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getCustomerById = async (customerId: string) => {
  try {
    const { data } = await apiPrivate.get<Customer>(`customers/${customerId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createCustomer = async (payload: CustomerFormValues) => {
  try {
    const { data } = await apiPrivate.post<Customer>("customers", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateCustomer = async (
  customerId: string,
  payload: CustomerFormValues
) => {
  try {
    const { data } = await apiPrivate.patch<Customer>(
      `customers/${customerId}`,
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

const deleteCustomer = async (customerId: string) => {
  try {
    const { data } = await apiPrivate.delete<Customer>(
      `customers/${customerId}`
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
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
