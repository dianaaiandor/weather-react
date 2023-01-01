import React from "react";

export default function WeatherToday(props) {
  return (
    <div>
      <div className="Weather container">
        <div className="row">
          <div className="col-sm-4 weather-parameters">
            <p>
              <strong>{props.apiData.description}</strong>
            </p>
            <p>
              wind:{" "}
              <span>
                <span>{Math.round(props.apiData.wind)}</span> m/c
              </span>
            </p>
            <p>
              humidity:{" "}
              <span>
                {" "}
                <span>{props.apiData.humidity}</span> %{" "}
              </span>
            </p>
          </div>
          <div className="col-sm-4">
            <img
              src={props.apiData.iconUrl}
              alt="weather-icon"
              className="img-fluid"
              width={200}
            />
          </div>
          <div className="col-sm-4">
            <p>
              <span className="current-temperature">
                {Math.round(props.apiData.temperature)}
              </span>
              <span className="degree">
                <span>°C</span>
              </span>
            </p>
            <p>
              feels like: {Math.round(props.apiData.feeling)}
              °C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
