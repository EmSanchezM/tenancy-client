import axios, { AxiosError } from "axios";
import { codeMessage } from "../constants/codeMessage";
import { HttpExceptionBody } from "../models/error-http.model";

const BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const isServer = typeof window === "undefined";

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const apiPrivate = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiPrivate.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers"),
      token = cookies().get("token")?.value;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    console.log("token client", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
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
