import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./ThemeContext";
import "./styles/index.css";

ReactDOM.render(<ThemeProvider children={<App />} />, document.getElementById("root"));

if (module && module.hot) module.hot.accept();
