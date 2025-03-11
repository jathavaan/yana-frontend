import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#ffffff", contrastText: "#000000" },
    secondary: { main: "#6a1b9a", contrastText: "#ffffff" },
    info: { main: "#3a3a3a", contrastText: "#ffffff" },
    // success: {},
    // warning: {},
    error: { main: "#ff4081", contrastText: "#ffffff" },
    background: {
      default: "#f7f7f7",
      paper: "#ffffff",
    },
    // action: {},
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 10,
  },
  typography: {},
});
