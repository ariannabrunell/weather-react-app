import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function celsius() {
    return ((props.imperial - 32) * 5) / 9;
  }

  if (unit === "imperial") {
    return (
      <div className="Temperature">
        <span className="temperature" id="temperature">
          {Math.round(props.imperial)}
        </span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showMetric}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temperature" id="temperature">
          {Math.round(celsius())}
        </span>
        <span className="unit">
          <a href="/" onClick={showImperial}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
