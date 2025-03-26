import { StackProps } from "@mui/material";
import { StyledStack } from "@features/ui/stack/stack.style.ts";

export const Stack = (props: StackProps) => {
  return <StyledStack spacing={1} useFlexGap {...props} />;
};
