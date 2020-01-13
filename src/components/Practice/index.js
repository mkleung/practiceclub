import React, { useState, useEffect, useContext } from "react";
import PracticeList from "./PracticeList";
import { TaskContext } from "../../controller/TaskContext";
import { TimesContext } from "../../controller/TimesContext";
import Time from "../../models/Time";
import "../../styles/practice.scss";
import Calendar from "../Calendar";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const { times, setTimes, addTime } = useContext(TimesContext);

  let today = new Date().getDay();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  // const saveTime = time => {

  //   if (time) {
  //     var today = new Date();
  //     var id = times.length === 0 ? 0 : times[times.length - 1].id;
  //     setTimes(prevTask => [
  //       ...prevTask,
  //       new Time(
  //         id,
  //         1,
  //         time,
  //         `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  //       )
  //     ]);
  //   }
  // };

  var currentDate = new Date();
  var displayCurrentDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-white">
            Today's Practice Goals
          </h2>
        </div>

        <div className="flex justify-center">
          <h3 className="text-1xl font-bold mb-5 text-white">
            {displayCurrentDate}
          </h3>
        </div>

        <div className="flex justify-center flex-row">
          <div className="flex-1 px-2">
            <PracticeList
              title={weekday[today]}
              tasks={tasks}
              addTime={addTime}
            />
          </div>
        </div>

        {/* <Calendar /> */}
      </div>
    </div>
  );
};

export default Dashboard;
