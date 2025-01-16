import { useGoogleLogin } from "@features/auth/auth.hooks.ts";
import { GoogleLogin } from "@react-oauth/google";

export const LoginButtonGoogle = () => {
  const {
    isGoogleLoginPending,
    isGoogleLoginError,
    onLoginSuccess,
    onLoginFailure,
    onLogout,
  } = useGoogleLogin();

  if (isGoogleLoginPending) return <p>Loading...</p>;
  if (isGoogleLoginError) return <p>Something went wrong</p>;
  return (
    <div>
      <GoogleLogin
        onSuccess={onLoginSuccess}
        onError={onLoginFailure}
        useOneTap={false}
      />
      <button onClick={onLogout}>Sign out</button>
    </div>
  );
};
