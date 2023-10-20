import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CursorTracker from "./components/CursorTracker"; 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <CursorTracker />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
