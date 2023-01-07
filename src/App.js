import "./App.css";
import Weather from "./Weather";
import NewUnits from "./NewUnits";
import Form from "./Form";
import FormattedDate from "./FormattedDate";
import City from "./City";
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
          <Form changeCity={setCity} />
          <NewUnits units={units} changeUnits={setUnits} />
          <FormattedDate />
          <City city={city} />
          <Weather city={city} units={units} />
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
