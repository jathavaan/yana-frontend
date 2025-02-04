import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#f7f7f7", light: "#ffffff" },
    secondary: { main: "#000000" },
    // info: {},
    // success: {},
    // warning: {},
    // error: {},
    background: {
      default: "#f7f7f7",
      paper: "#ffffff",
    },
    // action: {},
  },
  shape: {
    borderRadius: 10,
  },
  typography: {},
});
