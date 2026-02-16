import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { injectTheme } from "./company-assets/theme";
import "./index.css";
import App from "./App.jsx";

injectTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
