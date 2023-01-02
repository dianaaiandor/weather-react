import React, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <p>
          <span className="current-temperature">
            {" "}
            {Math.round(props.celsius)}
          </span>
          <span>
            <span>
              <a href="./" onClick={showCelsius}>
                °C
              </a>{" "}
              |{" "}
              <a href="./" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </span>
        </p>
        <p>
          feels like: {Math.round(props.celsiusFeeling)}
          °C
        </p>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <p>
          <span className="current-temperature">
            {" "}
            {Math.round(props.celsius * 1.8 + 32)}
          </span>
          <span>
            <span>
              <a href="./" onClick={showCelsius}>
                °C
              </a>{" "}
              |{" "}
              <a href="./" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </span>
        </p>
        <p>
          feels like: {Math.round(props.celsiusFeeling * 1.8 + 32)}
          °C
        </p>
      </div>
    );
  }
}
