import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Friday 20:43",
      temperature: response.data.main.temp,
      city: response.data.main.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
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
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="Today">
            <h1 id="city">{weatherData.city}</h1>
            <ul>
              <li id="date">{weatherData.date}</li>
              <li id="description">{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                      id="icon"
                    />
                  </li>
                  <li>
                    <span className="temperature" id="temperature">
                      {weatherData.temperature}
                    </span>
                    <span className="units">°F</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="weatherData">
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span>km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
    const apiKey = "de7f085d10e4d0dcecaec28bba8de455";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
