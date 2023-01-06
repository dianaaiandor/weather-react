import React from "react";
import UnitConversion from "./UnitConversion";
import "./WeatherToday.css";

export default function WeatherToday(props) {
  return (
    <div>
      <div className="WeatherToday container">
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
            <UnitConversion
              celsius={props.apiData.temperature}
              celsiusFeeling={props.apiData.feeling}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
