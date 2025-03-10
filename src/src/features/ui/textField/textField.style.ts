import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  "& .MuiOutlinedInput-root": {
    border: "1px",
    "& :hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      borderRadius: theme.shape.borderRadius,
    },
    "& :active, & :focus": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
      borderRadius: theme.shape.borderRadius,
    },
    "& .MuiInputBase-input": {
      border: "none",
      padding: theme.spacing(2, 0.4),
    },
  },

  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px",
    },
  },
}));
