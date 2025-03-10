import { LoginButtonGoogle } from "@features/auth";
import { TextField } from "@features/ui";

export const LoginPage = () => {
  return (
    <>
      <LoginButtonGoogle />
      <TextField required placeholder="Placeholder text..." fullWidth />
    </>
  );
};
