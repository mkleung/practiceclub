import React from "react";

const Labels = () => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="weekdayLabels">
      {days.map((item, index) => (
        <div className="weeklyLabel" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default Labels;
