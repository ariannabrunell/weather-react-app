import React, { useState } from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "de7f085d10e4d0dcecaec28bba8de455";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="weatherApp">
          <form onSubmit={handleSubmit} id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  id="city-input"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={changeCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <Weather data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <footer>
          <a
            href="github.com/ariannabrunell/vanilla-weather-app"
            target="_blank"
          >
            Open-source code
          </a>
          by Arianna Brunell
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
