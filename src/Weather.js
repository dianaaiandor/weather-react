import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponce(responce) {
    setWeatherData({
      description: responce.data.condition.description,
      wind: responce.data.wind.speed,
      humidity: responce.data.temperature.humidity,
      temperature: responce.data.temperature.current,
      feeling: responce.data.temperature.feels_like,
      date: new Date(responce.data.time * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather container">
        <p>
          <FormattedDate date={weatherData.date} />
        </p>
        <div className="row">
          <div className="col-sm-4 weather-parameters">
            <p>
              <strong>{weatherData.description}</strong>
            </p>
            <p>
              wind:{" "}
              <span>
                <span>{Math.round(weatherData.wind)}</span> m/c
              </span>
            </p>
            <p>
              humidity:{" "}
              <span>
                {" "}
                <span>{weatherData.humidity}</span> %{" "}
              </span>
            </p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="sun"
              id="icon"
              className="img-fluid"
              width={200}
            />
          </div>
          <div className="col-sm-4">
            <p>
              <span className="current-temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="degree">
                <span>°C</span>
              </span>
            </p>
            <p>
              feels like: {Math.round(weatherData.feeling)}
              °C
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0tf4be4a6f7od6f8a4a30d931b721101";
    let units = "metric";
    let query = "Kyiv";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponce);
    return "Loading...";
  }
}
