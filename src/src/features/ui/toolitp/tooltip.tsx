import { TooltipProps } from "@mui/material";
import { StyledTooltip } from "@features/ui/toolitp/tooltip.style.ts";

export const Tooltip = (props: TooltipProps) => {
  return <StyledTooltip {...props} />;
};
