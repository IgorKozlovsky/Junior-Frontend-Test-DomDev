import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const container = document.getElementById("root")!;
const root = createRoot(container);

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    primary: "#1a3650",
    secondary: "#fff7d6",
    highlight: "#17ae92",
    success: "#68f1b6",
    error: "#f1755f",
  },
};

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
