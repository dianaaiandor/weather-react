import React from "react";

export default function NewUnits(props) {
  console.log("UNITS", props.units);
  function setC() {
    props.changeUnits("metric");
  }
  function setF() {
    props.changeUnits("imperial");
  }

  return (
    <div>
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
