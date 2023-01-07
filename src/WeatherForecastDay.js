import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <p className="WeatherForecast-day">Fri</p>
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
