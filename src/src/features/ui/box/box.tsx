import { BoxProps } from "@mui/material";
import { StyledBox } from "@features/ui/box/box.style.ts";

export const Box = (props: BoxProps) => {
  return <StyledBox {...props} />;
};
