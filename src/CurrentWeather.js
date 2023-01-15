import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentWeather.css";
import CurrentWeatherParameters from "./CurrentWeatherParameters";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);

  if (weatherData === null) {
    function handleResponce(responce) {
      setWeatherData({
        description: responce.data.condition.description,
        wind: responce.data.wind.speed,
        humidity: responce.data.temperature.humidity,
        temperature: responce.data.temperature.current,
        feeling: responce.data.temperature.feels_like,
        iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${responce.data.condition.icon}.png`,
      });
    }

    let apiKey = "0tf4be4a6f7od6f8a4a30d931b721101";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${props.units}`;
    axios.get(apiUrl).then(handleResponce);

    return <div>Loading...</div>;
  } else {
    return (
      <div className="CurrentWeather container">
        <div>
          <CurrentWeatherParameters apiData={weatherData} units={props.units} />
        </div>
      </div>
    );
  }
}
