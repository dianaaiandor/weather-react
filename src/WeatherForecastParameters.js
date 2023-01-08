import React from "react";
import "./WeatherForecastParameters.css";

export default function WeatherForecastParameters(props) {
  return (
    <div className="WeatherForecastParameters">
      <div className="row">
        <div className="col">
          <p className="WeatherForecastParameters-day">Fri</p>
          <img
            src={props.data.iconUrl}
            alt="weather-icon"
            className="img-fluid"
            width={50}
          />
          <p>
            <span className="forecast-temp-max">2°</span>{" "}
            <span className="forecast-temp-min">13°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
