import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }
  return WithRoot;
}
