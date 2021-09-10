import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thur</div>
          <div className="Forecast-icon">
            <WeatherIcon code="01d" size={35} />
          </div>
          <div className="Forecast-temperature">
            <span className="Forecast-max">19°</span>
            <span className="Forecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
