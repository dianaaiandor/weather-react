import React from "react";
import "./WeatherForecastParameters.css";

export default function WeatherForecastParameters(props) {
  let date = new Date(props.apiData.time * 1000);
  let dayIndex = date.getDay();
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //let icon = props.apidata.condition.icon;
  //let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.apidata.condition.icon}.png`;

  return (
    <div className="WeatherForecastParameters">
      <div>
        <div>
          <p className="WeatherForecastParameters-day"> {day[dayIndex]}</p>
          <img
            src={props.apiData.condition.icon_url}
            alt="weather-icon"
            className="img-fluid"
            width={50}
          />
          <p>
            <span className="forecast-temp-max">
              {Math.round(props.apiData.temperature.maximum)}°
            </span>
            {"  "}
            <span className="forecast-temp-min">
              {Math.round(props.apiData.temperature.minimum)}°
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
