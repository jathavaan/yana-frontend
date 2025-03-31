import { IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.secondary.dark,
  borderRadius: theme.shape.borderRadius,
  alignItems: "center",
  textTransform: "none",
  padding: theme.spacing(1.2, 1.2),
  border: "none",

  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.primary.contrastText,
  },

  "&.MuiButton-icon": {
    alignItems: "center",
    pl: 2,
  },
}));
