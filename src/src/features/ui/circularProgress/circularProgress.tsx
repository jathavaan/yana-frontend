import { StyledCircularProgress } from "@features/ui/circularProgress/circularProgress.style.ts";
import { CircularProgressProps } from "@mui/material";

export const CircularProgress = ({ ...props }: CircularProgressProps) => {
  return <StyledCircularProgress {...props} />;
};
