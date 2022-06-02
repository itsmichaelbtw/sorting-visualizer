import "./src/css/tailwind.css";
import "./src/css/main.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
