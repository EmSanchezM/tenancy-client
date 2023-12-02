import { apiPrivate, errorHandler } from "../api.service";

import { DeliveryDriver } from "@/lib/models/delivery-driver.model";
import { DeliveryDriverFormValues } from "@/lib/validation-schemes/delivery-driver.schema";

const getAllDeliveryDrivers = async () => {
  try {
    const { data } = await apiPrivate.get<DeliveryDriver[]>("delivery-drivers");

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getDeliveryDriverById = async (deliveryDriverId: string) => {
  try {
    const { data } = await apiPrivate.get<DeliveryDriver>(`delivery-drivers/${deliveryDriverId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createDeliveryDriver = async (payload: DeliveryDriverFormValues) => {
  try {
    const { data } = await apiPrivate.post<DeliveryDriver>("delivery-drivers", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updateDeliveryDriver = async (
  deliveryDriverId: string,
  payload: Partial<DeliveryDriverFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<DeliveryDriver>(
      `delivery-drivers/${deliveryDriverId}`,
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

const deleteDeliveryDriver = async (deliveryDriverId: string) => {
  try {
    const { data } = await apiPrivate.delete<DeliveryDriver>(
      `delivery-drivers/${deliveryDriverId}`
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
  getAllDeliveryDrivers,
  getDeliveryDriverById,
  createDeliveryDriver,
  updateDeliveryDriver,
  deleteDeliveryDriver,
};
