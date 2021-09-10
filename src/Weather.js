import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 id="city">{props.data.city}</h1>
      <ul>
        <li id="date">
          <FormattedDate date={props.data.date} />
        </li>
        <li id="description">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li>
              <WeatherIcon code={props.data.icon} size={60} />
            </li>
            <li>
              <Temperature imperial={props.data.temperature} />
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="weatherData">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
