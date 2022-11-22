import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
