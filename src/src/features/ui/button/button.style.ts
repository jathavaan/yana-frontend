import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  borderRadius: theme.shape.borderRadius,
  align: "center",
  textTransform: "none",
  padding: theme.spacing(1.2, 1.2),

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.primary.contrastText,
  },
}));
