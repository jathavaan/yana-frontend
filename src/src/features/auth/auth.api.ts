import { sendApiRequest } from "@shared/axios";
import {
  AuthenticateUserBody,
  AuthenticateUserResponse,
} from "@features/auth/auth.types.ts";

export const loginGoogleUser = async (
  authorizationCode: string,
): Promise<AuthenticateUserResponse> =>
  await sendApiRequest<
    undefined,
    AuthenticateUserBody,
    AuthenticateUserResponse
  >({
    endpoint: "Auth/login/google",
    requestMethod: "POST",
    body: {
      authorizationCode: authorizationCode,
    },
  });

export const registerGoogleUser = async (
  authorizationCode: string,
): Promise<AuthenticateUserResponse> =>
  await sendApiRequest<
    undefined,
    AuthenticateUserBody,
    AuthenticateUserResponse
  >({
    endpoint: "Auth/register/google",
    requestMethod: "POST",
    body: {
      authorizationCode: authorizationCode,
    },
  });
