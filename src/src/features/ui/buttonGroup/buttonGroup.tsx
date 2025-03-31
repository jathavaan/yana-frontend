import { ButtonGroupProps } from "@mui/material";
import { StyledButtonGroup } from "@features/ui/buttonGroup/buttonGroup.style.ts";

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <StyledButtonGroup {...props} />;
};
