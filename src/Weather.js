import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherToday from "./WeatherToday";
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
        <div>
          <FormattedDate date={weatherData.date} />
        </div>
        <div>
          <WeatherToday apiData={weatherData} />
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
