import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "@shared/themes/theme.ts";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { reduxStore } from "@shared/stores/redux.store.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StrictMode>
            <App />
          </StrictMode>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </GoogleOAuthProvider>,
);
