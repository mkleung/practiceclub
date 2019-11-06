import React, { useContext, useEffect, useState } from "react";
import "./calendar.scss";
import Labels from "./labels";
import Dates from "./dates";
import { TaskContext } from "../../controller/TaskContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Calendar = () => {
  const { times } = useContext(TaskContext);

  const [completedTimes, setCompletedTimes] = useState([]);

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // INITIALIZE
  useEffect(() => {
    let currentDate = new Date().toLocaleString();
    console.log(currentDate.split(",")[0]);
  }, []);

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-5 text-white">Calendar</h2>
        </div>

        <div className="flex justify-center bg-white shadow-md rounded p-10">
          <div className="calendar">
            <div className="title">
              <span className="month">{month}</span>{" "}
              <span className="year">{year}</span>
            </div>

            <Labels />

            <Dates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
