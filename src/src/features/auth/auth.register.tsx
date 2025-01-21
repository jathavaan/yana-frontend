import { useGoogleRegister } from "@features/auth/auth.hooks.ts";

export const RegisterGoogleButton = () => {
  const {
    onGoogleRegisterClick,
    isGoogleRegisterPending,
    isGoogleRegisterError,
  } = useGoogleRegister();

  return (
    <div>
      {isGoogleRegisterPending && <p>Registering user...</p>}
      {isGoogleRegisterError && (
        <p>Something went wrong while creating a user</p>
      )}
      <button onClick={() => onGoogleRegisterClick()}>Register</button>
    </div>
  );
};
