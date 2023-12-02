import { apiPrivate, errorHandler } from "../api.service";
import { Requisition } from "@/lib/models/requisition.model";
import {
  AddRequisitionItemsFormValues,
  DeleteRequisitionItemsFormValues,
  RequisitionFormValues,
  UpdatePricesFormValues,
  UpdateRequisitionFormValues,
  UpdateStatusRequisitionFormValues,
} from "@/lib/validation-schemes/requisition.schema";

const getAllRequisitions = async () => {
  try {
    const { data } = await apiPrivate.get<Requisition[]>("requisitions");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getRequisitionById = async (requisitionId: string) => {
  try {
    const { data } = await apiPrivate.get<Requisition>(
      `requisitions/${requisitionId}`
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

const createRequisition = async (payload: RequisitionFormValues) => {
  try {
    const { data } = await apiPrivate.post<Requisition>(
      "requisitions",
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

const addItemsRequisition = async (
  requisitionId: string,
  payload: AddRequisitionItemsFormValues
) => {
  try {
    const { data } = await apiPrivate.post<Requisition>(
      `requisitions/${requisitionId}/items`,
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

const updateRequisition = async (
  requisitionId: string,
  payload: UpdateRequisitionFormValues
) => {
  try {
    const { data } = await apiPrivate.put<Requisition>(
      `requisitions/${requisitionId}`,
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

const changeStatusRequisition = async (
  requisitionId: string,
  payload: UpdateStatusRequisitionFormValues
) => {
  try {
    const { data } = await apiPrivate.patch<Requisition>(
      `requisitions/${requisitionId}`,
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

const updatePricesRequisition = async (
  requisitionId: string,
  payload: UpdatePricesFormValues
) => {
  try {
    const { data } = await apiPrivate.patch<Requisition>(
      `requisitions/${requisitionId}`,
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

const deleteRequisitionItems = async (
  requisitionId: string,
  payload: DeleteRequisitionItemsFormValues
) => {
  try {
    const { data } = await apiPrivate.delete<Requisition>(
      `requisitions/${requisitionId}/items`,
      { data: payload }
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
  getAllRequisitions,
  getRequisitionById,
  createRequisition,
  addItemsRequisition,
  updateRequisition,
  updatePricesRequisition,
  changeStatusRequisition,
  deleteRequisitionItems,
};
