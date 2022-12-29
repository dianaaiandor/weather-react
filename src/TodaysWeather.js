import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./TodaysWeather.css";

export default function TodaysWeather(props) {
  return (
    <div className="TodaysWeather container">
      <div className="row">
        <div className="col-sm-4 weather-parameters">
          <p>
            <strong>{props.description}</strong>
          </p>
          <p>
            wind:
            <span>
              <span>{props.wind}</span> m/c
            </span>
          </p>
          <p>
            humidity:{" "}
            <span>
              {" "}
              <span>{props.humidity}</span> %{" "}
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
            <span className="current-temperature">{props.temperature}</span>
            <span className="degree">
              <span>°C</span>
            </span>
          </p>
          <p>
            feels like: {props.feeling}
            °C
          </p>
        </div>
      </div>
    </div>
  );
}
