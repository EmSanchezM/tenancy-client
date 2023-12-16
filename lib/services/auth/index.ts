import { getServerSession } from "next-auth";
import { LoginRequest, UserAuthenticate } from "@/lib/models/auth";

import { api, errorHandler } from "../api.service";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getUserSessionServer = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};

export const Login = async (payload: LoginRequest) => {
  try {
    const { emailOrUsername, password } = payload;

    const payloadData: any = {
      password,
    };

    if (emailOrUsername.includes("@")) {
      payloadData.email = emailOrUsername;
    } else {
      payloadData.username = emailOrUsername;
    }

    const { data } = await api.post<UserAuthenticate>(
      "auth/login",
      payloadData
    );

    return {
      success: data.id ? true : false,
      data,
    };
  } catch (error: any) {
    const errorData = errorHandler(error);
    throw { succes: false, data: errorData.message };
  }
};
