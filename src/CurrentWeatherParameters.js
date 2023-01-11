import React from "react";
import "./CurrentWeatherParameters.css";

export default function CurrentWeatherParameters(props) {
  return (
    <div>
      <div className="CurrentWeatherParameters container">
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
            <div>
              <p>
                <span className="current-temperature">
                  {" "}
                  {Math.round(props.apiData.temperature)}°
                </span>
              </p>
              <p>feels like: {Math.round(props.apiData.feeling)}°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
