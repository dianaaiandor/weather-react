import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let dayIndex = props.date.getDay();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("godina", props.date);
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  return (
    <div className="FormattedDate">
      <p>
        {day[dayIndex]}, {hour}:{minute} (GMT+2)
      </p>
    </div>
  );
}
