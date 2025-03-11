import { useGoogleLogin } from "@features/auth/auth.hooks.ts";
import { Button } from "@features/ui";
import GoogleIcon from "@mui/icons-material/Google";
import { ButtonProps } from "@mui/material";

export const LoginButtonGoogle = (props: ButtonProps) => {
  const { onGoogleLoginClick, isGoogleLoginPending, isGoogleLoginError } =
    useGoogleLogin();

  return (
    <Button
      buttonText="Sign in with Google"
      onClick={() => onGoogleLoginClick()}
      isLoading={isGoogleLoginPending}
      startIcon={<GoogleIcon />}
      {...props}
    />
  );
};
