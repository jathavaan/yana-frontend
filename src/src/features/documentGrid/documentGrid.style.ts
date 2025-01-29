import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from "@mui/material";

export const StyledDocumentGrid = styled(WidthProvider(Responsive))(
  ({ theme }) => ({ backgroundColor: theme.palette.primary.light }),
);
