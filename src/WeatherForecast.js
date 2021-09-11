import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "de7f085d10e4d0dcecaec28bba8de455";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
