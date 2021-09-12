import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <span className="temperature" id="temperature">
        {Math.round(props.imperial)}
      </span>
      <span className="unit">°F</span>
    </div>
  );
}
