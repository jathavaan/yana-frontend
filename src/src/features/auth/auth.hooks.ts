import {
  useGoogleLoginMutation,
  useGoogleRegisterMutation,
} from "@features/auth/auth.query.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@shared/stores";
import { setToken, setUserId } from "@features/auth/auth.slice.ts";
import {
  CodeResponse,
  googleLogout,
  useGoogleLogin as useReactOauthGoogleLogin,
} from "@react-oauth/google";

export const useGoogleLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    mutate,
    data: googleLoginResponse,
    isPending: isGoogleLoginPending,
    isError: isGoogleLoginError,
  } = useGoogleLoginMutation();

  const onGoogleLoginClick = useReactOauthGoogleLogin({
    onSuccess: (response: CodeResponse) => {
      if (!response.code) return;
      mutate(response.code);
    },
    flow: "auth-code",
  });

  const onLogout = () => {
    console.log("Logged out");
    googleLogout();
  };

  useEffect(() => {
    if (googleLoginResponse?.userId && googleLoginResponse.idToken) {
      dispatch(setUserId(googleLoginResponse.userId));
      dispatch(setToken(googleLoginResponse.idToken));
    }
  }, [googleLoginResponse, dispatch]);

  return {
    onGoogleLoginClick,
    onLogout,
    isGoogleLoginPending,
    isGoogleLoginError,
  };
};
export const useGoogleRegister = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    mutate,
    data: googleRegisterResponse,
    isPending: isGoogleRegisterPending,
    isError: isGoogleRegisterError,
  } = useGoogleRegisterMutation();

  const onGoogleRegisterClick = useReactOauthGoogleLogin({
    onSuccess: (response: CodeResponse) => {
      if (!response.code) return;
      mutate(response.code);
    },
    flow: "auth-code",
  });

  useEffect(() => {
    if (googleRegisterResponse?.userId && googleRegisterResponse.idToken) {
      dispatch(setUserId(googleRegisterResponse.userId));
      dispatch(setToken(googleRegisterResponse.idToken));
    }
  }, [googleRegisterResponse, dispatch]);

  return {
    onGoogleRegisterClick,
    isGoogleRegisterPending,
    isGoogleRegisterError,
  };
};
