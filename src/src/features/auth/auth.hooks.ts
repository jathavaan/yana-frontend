import { useGoogleLoginMutation } from "@features/auth/auth.query.ts";
import { GoogleAuthResponse } from "@features/auth/auth.types.ts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@shared/stores";
import {
  selectToken,
  selectUserId,
  setToken,
  setUserId,
} from "@features/auth/auth.slice.ts";
import { googleLogout } from "@react-oauth/google";

export const useGoogleLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(selectUserId);
  const token = useSelector(selectToken);

  const {
    mutate,
    data: authenticatedUser,
    isPending: isGoogleLoginPending,
    isError: isGoogleLoginError,
    error,
  } = useGoogleLoginMutation();

  const onLoginSuccess = (response: GoogleAuthResponse) => {
    if (!response.credential) return;
    dispatch(setToken(response.credential));
    mutate();
  };

  const onLoginFailure = () => {};

  const onLogout = () => {
    console.log("Logged out");
    googleLogout();
  };

  const authProviders = [{ id: "google", name: "Google" }];

  useEffect(() => {
    if (authenticatedUser?.userId && token) {
      console.log(authenticatedUser);
      dispatch(setUserId(authenticatedUser.userId));
    }
  }, [authenticatedUser, dispatch, error, token, userId]);

  return {
    authProviders,
    isGoogleLoginPending,
    isGoogleLoginError,
    onLoginSuccess,
    onLoginFailure,
    onLogout,
  };
};
export const useGoogleRegister = () => {};
