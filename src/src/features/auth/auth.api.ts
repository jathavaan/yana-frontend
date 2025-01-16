import { UserType } from "@shared/types";
import { sendApiRequest } from "@shared/axios";
import { LoginAndRegisterUserBody } from "@shared/auth/auth.types.ts";
import { getUserToken } from "@shared/auth";

export const loginGoogleUser = async (): Promise<UserType> =>
  await sendApiRequest<undefined, LoginAndRegisterUserBody, UserType>({
    endpoint: "Auth/login/google",
    requestMethod: "POST",
    token: getUserToken() ?? "",
  });

export const registerGoogleUser = async (): Promise<UserType> =>
  await sendApiRequest<undefined, LoginAndRegisterUserBody, UserType>({
    endpoint: "Auth/register/google",
    requestMethod: "POST",
    token: getUserToken() ?? "",
  });
