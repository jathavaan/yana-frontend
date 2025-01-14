import { useGoogleLoginMutation } from "@features/auth/auth.query.ts";

export const useGoogleLogin = () => {
  const {
    mutate,
    isPending: isGoogleLoginPending,
    isError: isGoogleLoginError,
  } = useGoogleLoginMutation("asdf");
  const onLoginSuccess = () => {
    mutate();
  };

  const onLoginFailure = () => {};

  return {
    isGoogleLoginPending,
    isGoogleLoginError,
    onLoginSuccess,
    onLoginFailure,
  };
};
export const useGoogleRegister = () => {};
