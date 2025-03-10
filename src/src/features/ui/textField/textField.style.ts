import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,

  "& ::placeholder": {
    color: theme.palette.secondary.contrastText,
    opacity: 0.75,
  },

  "& .MuiOutlinedInput-root": {
    "& :hover": {
      transition: theme.transitions.create(["background-color", "transform"]),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderRadius: theme.shape.borderRadius,
    },
    "& :active, & :focus": {
      transition: theme.transitions.create(["background-color", "transform"]),
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
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

  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px",
    },
  },
}));
