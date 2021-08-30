import React from "react";

export default function Today() {
  return (
    <div className="Today">
      <h1 id="city">Austin</h1>
      <ul>
        <li id="date">Friday 20:43</li>
        <li id="description">Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt=""
                id="icon"
              />
            </li>
            <li>
              <span className="temperature" id="temperature">
                81
              </span>
              <span className="units">°F</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="weatherData">
            <li>
              Humidity: <span id="humidity">77</span>%
            </li>
            <li>
              Wind: <span id="wind">12</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
