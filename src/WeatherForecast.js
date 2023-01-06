import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <p>Fri</p>
      <img
        src={props.apiData.iconUrl}
        alt="weather-icon"
        className="img-fluid"
        width={50}
      />
      <p>
        <span className="forecast-temp-max">2°</span>{" "}
        <span className="forecast-temp-min">13°</span>
      </p>
    </div>
  );
}
