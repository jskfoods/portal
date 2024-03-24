import { createTheme } from "@mui/material";

const theme = createTheme({
  fontFamily: ["Ariel", '"Noto Serif Devanagari"'].join(","),
  typography: {
    h1: { fontFamily: ['"Noto Serif Arabic"'].join(",") },
  },
  palette: {},
});

export default theme;
