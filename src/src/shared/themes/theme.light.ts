import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#f7f7f7" },
    secondary: { main: "#000000" },
    // info: {},
    // success: {},
    // warning: {},
    // error: {},
    background: {
      default: "#f7f7f7",
    },
    // action: {},
  },
  shape: {
    borderRadius: 6,
  },
  typography: {},
});
