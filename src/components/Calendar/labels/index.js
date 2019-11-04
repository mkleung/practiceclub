import React, { Component } from "react";
import "./labels.scss";

const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

class Labels extends Component {
  render() {
    const weekdayLabels = days.map((label, index) => {
      return (
        <div className="weeklyLabel" key={index}>
          {label}
        </div>
      );
    });

    return <div className="weekdayLabels">{weekdayLabels}</div>;
  }
}

export default Labels;
