import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { GlobalStyle } from "./GlobalStyle";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
