import { useMutation } from "@tanstack/react-query";
import {
  loginGoogleUser,
  registerGoogleUser,
} from "@features/auth/auth.api.ts";

export const useGoogleLoginMutation = () =>
  useMutation({
    mutationFn: loginGoogleUser,
  });

export const useGoogleRegisterMutation = () =>
  useMutation({
    mutationFn: registerGoogleUser,
  });
