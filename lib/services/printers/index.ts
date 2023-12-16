import { apiPrivate, errorHandler } from "../api.service";
import { Printer } from "@/lib/models/printer.model";
import { PrinterFormValues } from "@/lib/validation-schemes/printer.schema";

const getAllPrinters = async () => {
  try {
    const { data } = await apiPrivate.get<Printer[]>("printers");
    console.log("printers", data);
    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    console.log("error", errorData);
    throw { success: false, errorMessage: errorData.message };
  }
};

const getPrinterById = async (printerId: string) => {
  try {
    const { data } = await apiPrivate.get<Printer>(`printers/${printerId}`);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { success: false, errorMessage: errorData.message };
  }
};

const createPrinter = async (payload: PrinterFormValues) => {
  try {
    const { data } = await apiPrivate.post<Printer>("printers", payload);

    return {
      ok: true,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { ok: false, errorMessage: errorData.message };
  }
};

const updatePrinter = async (
  printerId: string,
  payload: Partial<PrinterFormValues>
) => {
  try {
    const { data } = await apiPrivate.patch<Printer>(
      `printers/${printerId}`,
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

const deletePrinter = async (printerId: string) => {
  try {
    const { data } = await apiPrivate.delete<Printer>(`printers/${printerId}`);

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
  getAllPrinters,
  getPrinterById,
  createPrinter,
  updatePrinter,
  deletePrinter,
};
