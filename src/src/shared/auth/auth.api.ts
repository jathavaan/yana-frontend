import { AxiosInstance, AxiosResponse } from "axios";
import {
  RefreshAccessTokenBody,
  RefreshAccessTokenResponse,
} from "@shared/auth/auth.types.ts";

export const refreshGoogleAccessToken = async (
  axiosInstance: AxiosInstance,
  body: RefreshAccessTokenBody,
): Promise<AxiosResponse<RefreshAccessTokenResponse>> =>
  await axiosInstance.post<RefreshAccessTokenResponse>(
    "Auth/refresh-token/google",
    body,
  );
