import { TypographyProps } from "@mui/material";
import { StyledText } from "@features/ui/text/text.style.ts";

export const Text = (props: TypographyProps) => {
  return <StyledText {...props} />;
};
