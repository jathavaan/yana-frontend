import { useGoogleLogin } from "@features/auth/auth.hooks.ts";

export const LoginButtonGoogle = () => {
  const { onGoogleLoginClick, isGoogleLoginPending, isGoogleLoginError } =
    useGoogleLogin();

  return (
    <div>
      {isGoogleLoginPending && <p>Logging in...</p>}
      {isGoogleLoginError && <p>Something went wrong while logging in</p>}
      <button onClick={() => onGoogleLoginClick()}>Sign in</button>
    </div>
  );
};
