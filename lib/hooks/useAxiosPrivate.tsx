"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { apiPrivate } from "../services/api.service";

const useAxiosPrivate = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${session?.user?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [session]);

  return apiPrivate;
};

export default useAxiosPrivate;
