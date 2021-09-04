import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <small>
      <a href="github.com/ariannabrunell/vanilla-weather-app" target="_blank">
        Open-source code
      </a>
      by Arianna Brunell
    </small>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
