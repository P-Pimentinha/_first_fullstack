import React from "react";
import { createRoot } from "react-dom/client";
import SSRProvider from 'react-bootstrap/SSRProvider';
import "./index.css";
import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <SSRProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SSRProvider>
  
);
