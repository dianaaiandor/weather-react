import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState({});

  function handleResponce(responce) {
    console.log(responce);
    setForecast({
      maxTemperature: responce.data.daily[0].temperature.maximum,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${responce.data.daily[0].condition.icon}.png`,
    });
  }
  console.log("iconUrl.", forecast.iconUrl);
  let city = props.city;
  let apiKey = "0tf4be4a6f7od6f8a4a30d931b721101";
  let unit = "metric";
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrlForecast).then(handleResponce);
  console.log("cityforecast", city);

  return (
    <div>
      <WeatherForecastDay data={forecast} />
    </div>
  );
}
