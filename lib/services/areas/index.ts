import { apiPrivate, errorHandler } from "../api.service";
import { Area } from "@/lib/models/area.model";
import { Table } from "@/lib/models/table.model";
import { AreaFormValues, TableFormValues } from "@/lib/validation-schemes";

const getAllAreas = async () => {
  try {
    const { data } = await apiPrivate.get<Area[]>(`areas`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getAreaById = async (areaId: string) => {
  try {
    const { data } = await apiPrivate.get<Area>(`areas/${areaId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createArea = async (payload: AreaFormValues) => {
  try {
    const { data } = await apiPrivate.post<Area>("areas", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateArea = async (areaId: string, payload: AreaFormValues) => {
  try {
    const { data } = await apiPrivate.patch<Area>(`areas/${areaId}`, payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const deleteArea = async (areaId: string) => {
  try {
    const { data } = await apiPrivate.delete<Area>(`areas/${areaId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const createTable = async (areaId: string, payload: TableFormValues) => {
  try {
    const { data } = await apiPrivate.post<Table>(
      `areas/${areaId}/tables`,
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

const updateTable = async (
  tableId: string,
  payload: Partial<TableFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<Table>(
      `areas/tables/${tableId}`,
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

const deleteTable = async (tableId: string) => {
  try {
    const { data } = await apiPrivate.delete<Table>(`areas/tables/${tableId}`);

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
  getAllAreas,
  getAreaById,
  createArea,
  updateArea,
  deleteArea,
  createTable,
  updateTable,
  deleteTable,
};
