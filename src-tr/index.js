import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.css";
import { AppProvider } from "./context/app/app-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);
