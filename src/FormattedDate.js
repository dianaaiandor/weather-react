import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let dayIndex = date.getDay();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  return (
    <div className="FormattedDate">
      <p>
        {day[dayIndex]}, {hour}:{minute}
      </p>
    </div>
  );
}
