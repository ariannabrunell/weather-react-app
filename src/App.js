import React from "react";
import "./App.css";
import Today from "./Today";

export default function App() {
  return (
    <div className="App">
      <div className="weatherApp">
        <form id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                id="city-input"
                autocomplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <Today />
      </div>
      <footer>
        <a href="github.com/ariannabrunell/vanilla-weather-app" target="_blank">
          Open-source code
        </a>
        by Arianna Brunell
      </footer>
    </div>
  );
}
