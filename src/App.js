import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Units from "./Units";
import Form from "./Form";
import FormattedDate from "./FormattedDate";
import City from "./City";
import WeatherForecast from "./WeatherForecast";
import React, { useState } from "react";

function App() {
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("Kyiv");

  console.log("city", city);
  console.log("unit", units);

  return (
    <div className="wrapApp">
      <div className="App">
        <div className="container">
          <FormattedDate />
          <Form changeCity={setCity} />

          <City city={city} />
          <Units units={units} changeUnits={setUnits} />
          <CurrentWeather
            city={city}
            units={units}
            key={"current" + city + units}
          />
          <WeatherForecast
            city={city}
            units={units}
            key={"forecast" + city + units}
          />
        </div>
      </div>
      <a
        href="https://github.com/dianaaiandor/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Coded by Di and it is open-source
      </a>
    </div>
  );
}

export default App;
