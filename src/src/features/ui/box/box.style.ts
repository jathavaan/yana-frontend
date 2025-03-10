import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  "& .MuiBox-root": {
    border: `1px solid ${theme.palette.secondary}`,
  },
}));
