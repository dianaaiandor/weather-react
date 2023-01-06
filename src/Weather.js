import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponce(responce) {
    setWeatherData({
      description: responce.data.condition.description,
      wind: responce.data.wind.speed,
      humidity: responce.data.temperature.humidity,
      temperature: responce.data.temperature.current,
      feeling: responce.data.temperature.feels_like,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${responce.data.condition.icon}.png`,
      date: new Date(responce.data.time * 1000),
    });
  }
  console.log("icon", city, weatherData);
  function Search(initiator) {
    console.log("Search", initiator);
    let apiKey = "0tf4be4a6f7od6f8a4a30d931b721101";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponce);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search("submit");
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  if (Object.getOwnPropertyNames(weatherData).length) {
    return (
      <div className="Weather container">
        <div className="WeatherSearchForm">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  className="form-control"
                  type="search"
                  name="city"
                  placeholder="Type your city"
                  autoFocus="on"
                  onChange={handleChange}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-outline-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          {" "}
          <h1 className="text-capitalize"> {city}</h1>
          <FormattedDate date={weatherData.date} />
        </div>
        <div>
          <WeatherToday apiData={weatherData} />
        </div>
        <div>
          <WeatherForecast apiData={weatherData} />
        </div>
      </div>
    );
  } else {
    Search("loading");
    return <div>Loading...</div>;
  }
}
