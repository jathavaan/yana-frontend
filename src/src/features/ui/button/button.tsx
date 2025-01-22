import { ButtonProps } from "@features/ui/button/button.types.ts";
import { StyledButton } from "@features/ui/button/button.style.ts";
import { CircularProgress } from "@features/ui/circularProgress";

export const Button = ({ buttonText, isLoading, ...props }: ButtonProps) => {
  return (
    <StyledButton fullWidth {...props}>
      {!isLoading ? buttonText : <CircularProgress size={25} />}
    </StyledButton>
  );
};
