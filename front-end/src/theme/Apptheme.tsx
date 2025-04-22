import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { ReactNode } from "react";
import { whiteTheme } from "./index";

interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={whiteTheme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};
