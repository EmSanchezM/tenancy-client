import { CreateCustomerDto, Customer } from "@/lib/models/customer.model";
import { apiPrivate, errorHandler } from "../api.service";

const getAllCustomers = async () => {
  try {
    const { data } = await apiPrivate.get<Customer[]>("customers");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, error: errorData.message };
  }
};

const createCustomer = async (payload: CreateCustomerDto) => {
  try {
    const { data } = await apiPrivate.post<Customer>("customers", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, error: errorData.message };
  }
};

const updateCustomer = async (payload: Partial<CreateCustomerDto>) => {
  try {
    const { data } = await apiPrivate.put<Customer>("customers", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, error: errorData.message };
  }
};

const deleteCustomer = async (customerID: string) => {
  try {
    const { data } = await apiPrivate.delete<Customer>(
      `customers/${customerID}`
    );

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, error: errorData.message };
  }
};

export { getAllCustomers, createCustomer, updateCustomer, deleteCustomer };
