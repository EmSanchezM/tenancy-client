import { apiPrivate, errorHandler } from "../api.service";
import { Employee } from "@/lib/models/employee.model";
import { EmployeeFormValues } from "@/lib/validation-schemes/employee.schema";

const getAllEmployees = async () => {
  try {
    const { data } = await apiPrivate.get<Employee[]>("employees");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createEmployee = async (payload: EmployeeFormValues) => {
  try {
    const { data } = await apiPrivate.post("employees", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateEmployee = async (
  employeeID: string,
  payload: EmployeeFormValues
) => {
  try {
    const { data } = await apiPrivate.patch(`employees/${employeeID}`, payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
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
    throw { ok: false, errorMessage: errorData.message };
  }
};

export { getAllEmployees, createEmployee, updateEmployee, deleteEmployee };
