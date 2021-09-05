import React from "react";
import FormattedDate from "./FormattedDate";

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
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="icon"
              />
            </li>
            <li>
              <span className="temperature" id="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°F</span>
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
