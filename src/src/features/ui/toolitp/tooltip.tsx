import { TooltipProps } from "@mui/material";
import { StyledTooltip } from "@features/ui/tooltip/tooltip.style.ts";
export const Tooltip = (props: TooltipProps) => {
  return <StyledTooltip {...props} />;
};
