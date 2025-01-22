import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  borderRadius: theme.shape.borderRadius,
  align: "center",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.primary.contrastText,
  },
}));
