import { Tenant } from "@/lib/models/tenant.model";
import { api, errorHandler } from "../api.service";

export const getTenant = async () => {
  try {
    const { data } = await api.get<Tenant>(
      `tenants/${process.env.TENANT_NAME}`
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
