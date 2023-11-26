import { apiPrivate, errorHandler } from "../api.service";
import { Branch } from "@/lib/models/branch.model";
import { BranchFormValues } from "@/lib/validation-schemes/branch.schema";

const getAllBranches = async () => {
  try {
    const { data } = await apiPrivate.get<Branch[]>("branches");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getBranchById = async (branchId: string) => {
  try {
    const { data } = await apiPrivate.get<Branch>(`branches/${branchId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createBranch = async (payload: BranchFormValues) => {
  try {
    const { data } = await apiPrivate.post<Branch>("branches", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateBranch = async (branchId: string, payload: BranchFormValues) => {
  try {
    const { data } = await apiPrivate.patch<Branch>(
      `branches/${branchId}`,
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

const deleteBranch = async (branchId: string) => {
  try {
    const { data } = await apiPrivate.delete(`branches/${branchId}`);

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
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
};
