import { CircularProgress, styled } from "@mui/material";

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  variant: "plain",
  color: theme.palette.primary.main,
}));
