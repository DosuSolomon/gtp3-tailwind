import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SiteProvider } from "./context/siteContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SiteProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SiteProvider>
);
