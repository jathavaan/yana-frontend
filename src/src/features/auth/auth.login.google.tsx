import { useGoogleLogin } from "@features/auth/auth.hooks.ts";
import { GoogleLogin } from "@react-oauth/google";

export const LoginButtonGoogle = () => {
  const {
    isGoogleLoginPending,
    isGoogleLoginError,
    onLoginSuccess,
    onLoginFailure,
  } = useGoogleLogin();

  if (isGoogleLoginPending) return <p>Loading...</p>;
  if (isGoogleLoginError) return <p>Something went wrong</p>;
  return <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />;
};
