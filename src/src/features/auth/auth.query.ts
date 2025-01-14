import { useMutation } from "@tanstack/react-query";
import {
  loginGoogleUser,
  refreshGoogleAccessToken,
  registerGoogleUser,
} from "@features/auth/auth.api.ts";

export const useGoogleLoginMutation = (refreshToken: string) =>
  useMutation({
    mutationFn: () => loginGoogleUser(refreshToken),
  });

export const useGoogleRegisterMutation = (refreshToken: string) =>
  useMutation({
    mutationFn: () => registerGoogleUser(refreshToken),
  });

export const useRefreshTokenMutation = (userId: string) =>
  useMutation({
    mutationFn: () => refreshGoogleAccessToken(userId),
  });
