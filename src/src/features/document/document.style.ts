import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from "@mui/material";

export const StyledDocumentGrid = styled(WidthProvider(Responsive))(() => ({}));

export const StyledSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: 0,
  paddingBottom: theme.spacing(1),
  margin: 0,
  display: "flex",
}));
