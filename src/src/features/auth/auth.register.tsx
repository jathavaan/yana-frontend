import { useGoogleRegister } from "@features/auth/auth.hooks.ts";
import { Button } from "@features/ui";
import GoogleIcon from "@mui/icons-material/Google";
import { ButtonProps } from "@mui/material";

export const RegisterGoogleButton = (props: ButtonProps) => {
  const {
    onGoogleRegisterClick,
    isGoogleRegisterPending,
    isGoogleRegisterError,
  } = useGoogleRegister();

  return (
    <Button
      buttonText="Register with Google"
      onClick={() => onGoogleRegisterClick()}
      isLoading={isGoogleRegisterPending}
      startIcon={<GoogleIcon />}
      {...props}
    />
  );
};
