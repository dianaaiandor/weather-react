import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import WeatherToday from "./WeatherToday";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  console.log("WeatherInit", props.city, props.units, weatherData);

  if (weatherData === null) {
    function handleResponce(responce) {
      setWeatherData({
        city: props.city,
        units: props.units,
        description: responce.data.condition.description,
        wind: responce.data.wind.speed,
        humidity: responce.data.temperature.humidity,
        temperature: responce.data.temperature.current,
        feeling: responce.data.temperature.feels_like,
        iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${responce.data.condition.icon}.png`,
      });
    }
    console.log("Search", props.city, props.units);
    let apiKey = "0tf4be4a6f7od6f8a4a30d931b721101";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${props.units}`;
    axios.get(apiUrl).then(handleResponce);

    return <div>Loading...</div>;
  } else {
    if (weatherData.city !== props.city || weatherData.units !== props.units) {
      setWeatherData(null);
    }
    return (
      <div className="Weather container">
        <div>
          <WeatherToday apiData={weatherData} />
        </div>
      </div>
    );
  }
}
