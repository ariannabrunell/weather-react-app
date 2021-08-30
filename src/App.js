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
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" class="btn btn-primary" />
            </div>
          </div>
        </form>
        <Today />
      </div>
    </div>
  );
}
