import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,

  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.primary.contrastText,
  },

  "& ::placeholder": {
    color: theme.palette.primary.contrastText,
    opacity: 0.75,
  },

  "& .MuiOutlinedInput-root": {
    "&:hover": {
      transition: theme.transitions.create(["background-color", "transform"]),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: theme.shape.borderRadius,
    },
    "&:active, &:focus": {
      transition: theme.transitions.create(["background-color", "transform"]),
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      borderRadius: theme.shape.borderRadius,
    },
    "& .MuiInputBase-input": {
      padding: theme.spacing(2, 1.2),
    },
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: `none`,
    "& :hover": {
      border: "none",
    },
  },

  "& .Mui-disabled": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px dotted ${theme.palette.action.disabled}`,
    },
  },

  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px",
    },
  },

  "& .MuiInputLabel-shrink": {
    color: theme.palette.secondary.contrastText,
    marginLeft: theme.spacing(-0.8),
    padding: theme.spacing(0.2, 1),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));
