import React, { useState, useContext } from "react";
import divStyle from "../../styles";
import Labels from "./Labels";
import Days from "./Days";
import "./calendar.scss";
import { TaskContext } from "../../controller/TaskContext";

const Calendar = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const { times } = useContext(TaskContext);

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-10">
          <h2 className="text-4xl font-bold text-white">Calendar</h2>
        </div>

        <div className="flex justify-center bg-white shadow-md rounded p-10">
          <div className="calendar">
            <div className="title">
              <span className="month">{month}</span>{" "}
              <span className="year">{year}</span>
            </div>
            <Labels />
            <Days times={times} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
