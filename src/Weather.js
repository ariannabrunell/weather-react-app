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

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="icon">
              <WeatherIcon code={props.data.icon} size={50} />
            </div>

            <div className="mr-5">
              <Temperature imperial={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
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
