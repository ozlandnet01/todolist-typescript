import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Home from "./modules/Home";
import { Provider } from "react-redux";
import store from "./config/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}
