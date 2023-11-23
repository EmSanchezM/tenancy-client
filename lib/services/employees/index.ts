import { apiPrivate, errorHandler } from "../api.service";
import { CreateEmployeeDto, Employee } from "@/lib/models/employee.model";

const getAllEmployees = async () => {
  try {
    const { data } = await apiPrivate.get<Employee[]>("employees");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, error: errorData.message };
  }
};

const createEmployee = async (payload: CreateEmployeeDto) => {
  try {
    const { data } = await apiPrivate.post("employees", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, error: errorData.message };
  }
};

const updateEmployee = async (payload: Partial<CreateEmployeeDto>) => {
  try {
    const { data } = await apiPrivate.put("employees", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, error: errorData.message };
  }
};

const deleteEmployee = async (employeeID: string) => {
  try {
    const { data } = await apiPrivate.delete(`employees/${employeeID}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, error: errorData.message };
  }
};

export { getAllEmployees, createEmployee, updateEmployee, deleteEmployee };
