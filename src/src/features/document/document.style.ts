import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from "@mui/material";

export const StyledDocumentGrid = styled(WidthProvider(Responsive))(
  ({ theme }) => ({
    "& .react-grid-placeholder": {
      backgroundColor: "transparent",
      outline: `1px dotted ${theme.palette.secondary.main}`,
      borderRadius: theme.shape.borderRadius,
    },

    "& .react-resizable-handle": {},
  }),
);
