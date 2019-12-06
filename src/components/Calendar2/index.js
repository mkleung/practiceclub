import React, { useState } from "react";
import divStyle from "../../styles";
import "./calendar.scss";

const Calendar = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-white">Calendar</h2>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
