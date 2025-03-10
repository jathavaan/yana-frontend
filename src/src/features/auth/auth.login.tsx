import { useGoogleLogin } from "@features/auth/auth.hooks.ts";
import { Button } from "@features/ui";
import GoogleIcon from "@mui/icons-material/Google";

export const LoginButtonGoogle = () => {
  const { onGoogleLoginClick, isGoogleLoginPending, isGoogleLoginError } =
    useGoogleLogin();

  return (
    <div>
      {isGoogleLoginError && <p>Something went wrong while logging in</p>}
      <Button
        buttonText="Login with Google"
        onClick={() => onGoogleLoginClick()}
        isLoading={isGoogleLoginPending}
        startIcon={<GoogleIcon />}
      />
    </div>
  );
};
