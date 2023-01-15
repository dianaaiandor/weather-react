import React from "react";

export default function ShowCorF(props) {
  console.log("CorF", props.units);
  if (props.units === "metric") {
    return <span>C</span>;
  } else if (props.units === "imperial") {
    return <span>F</span>;
  }
}
