import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";

import { codeMessage } from "../constants/codeMessage";
import { HttpExceptionBody } from "../models/error-http.model";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const tenantName = process.env.TENANT_NAME;

export const api = axios.create({
  baseURL: `${baseURL}/${tenantName}`,
  headers: {
    "Content-type": "application/json",
  },
});

export const apiPrivate = axios.create({
  baseURL: `${baseURL}/${tenantName}`,
  headers: {
    "Content-Type": "application/json",
  },
});

apiPrivate.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers["Authorization"] = `Bearer ${session?.user.token}`;
  }

  return config;
});

export const errorHandler = (error: any) => {
  const axiosError = error as AxiosError;
  const { response } = axiosError;

  if (response && response.status) {
    const responseError = response.data as HttpExceptionBody;
    const messageError = responseError.message;
    const errorText = messageError || codeMessage[response.status];

    return {
      status: responseError.statusCode,
      message: errorText,
    };
  } else {
    return {
      status: 599,
      message: "Cannot connect to the server, Check your internet network",
    };
  }
};
