import React from "react";
import "./Units.css";

export default function Units(props) {
  function setC() {
    props.changeUnits("metric");
  }
  function setF() {
    props.changeUnits("imperial");
  }

  return (
    <div className="Units">
      <span
        style={
          props.units === "metric" ? { textDecoration: "underline" } : null
        }
        onClick={setC}
      >
        Celsius
      </span>
      &nbsp;|&nbsp;
      <span
        style={
          props.units === "imperial" ? { textDecoration: "underline" } : null
        }
        onClick={setF}
      >
        Fahrenheit
      </span>
    </div>
  );
}
