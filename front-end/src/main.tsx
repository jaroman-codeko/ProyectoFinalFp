import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppTheme } from "./theme/Apptheme.tsx";
import { ThemeProvider } from "@emotion/react";
import { whiteTheme } from "./theme/theme.ts";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={whiteTheme}>
        <AppTheme>
          <App />
        </AppTheme>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
