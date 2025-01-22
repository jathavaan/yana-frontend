import { useGoogleRegister } from "@features/auth/auth.hooks.ts";
import { Button } from "@features/ui/button";
import GoogleIcon from "@mui/icons-material/Google";

export const RegisterGoogleButton = () => {
  const {
    onGoogleRegisterClick,
    isGoogleRegisterPending,
    isGoogleRegisterError,
  } = useGoogleRegister();

  return (
    <div>
      {isGoogleRegisterError && (
        <p>Something went wrong while creating a user</p>
      )}
      <Button
        buttonText="Register with Google"
        onClick={() => onGoogleRegisterClick()}
        isLoading={isGoogleRegisterPending}
        startIcon={<GoogleIcon />}
      />
    </div>
  );
};
