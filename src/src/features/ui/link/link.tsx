import { StyledLink } from "@features/ui/link/link.style.ts";
import { LinkProps } from "@mui/material";

export const Link = (props: LinkProps) => {
  return <StyledLink {...props} />;
};
