import React from "react";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { hydrate, render } from "react-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const jsx = (
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(jsx, rootElement);
} else {
  render(jsx, rootElement);
}


