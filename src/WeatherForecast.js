import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastParameters from "./WeatherForecastParameters";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  if (forecast === null) {
    function handleResponce(responce) {
      console.log("Forecast", responce);
      setForecast(responce.data.daily);
    }
    //{

    //time: responce.data.daily[1].time,
    //maxTemperature: responce.data.daily[1].temperature.maximum,
    // minTemperature: responce.data.daily[1].temperature.minimum,
    //iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${responce.data.daily[0].condition.icon}.png`,
    // }
    let apiKey = "0tf4be4a6f7od6f8a4a30d931b721101";
    let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${props.units}`;
    axios.get(apiUrlForecast).then(handleResponce);

    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastParameters apiData={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
