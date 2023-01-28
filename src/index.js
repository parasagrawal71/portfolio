import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/app/App";
import "index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  process.env.NODE_ENV === "production" ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
