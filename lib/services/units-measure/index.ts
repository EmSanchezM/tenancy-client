import { apiPrivate, errorHandler } from "../api.service";
import { Unit } from "@/lib/models/unit.model";

import { UnitsOfMeasureFormValues } from "@/lib/validation-schemes/units-measure.schema";

const getAllUnitsOfMeasure = async () => {
  try {
    const { data } = await apiPrivate.get<Unit[]>("units");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getUnitOfMeasureById = async (unitId: string) => {
  try {
    const { data } = await apiPrivate.get<Unit>(`units/${unitId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createUnitOfMeasure = async (payload: UnitsOfMeasureFormValues) => {
  try {
    const { data } = await apiPrivate.post<Unit>("units", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateUnitOfMeasure = async (
  unitId: string,
  payload: Partial<UnitsOfMeasureFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<Unit>(
      `units/${unitId}`,
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

const deleteUnitOfMeasure = async (unitId: string) => {
  try {
    const { data } = await apiPrivate.delete<Unit>(
      `units/${unitId}`
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
  getAllUnitsOfMeasure,
  getUnitOfMeasureById,
  createUnitOfMeasure,
  updateUnitOfMeasure,
  deleteUnitOfMeasure,
};
