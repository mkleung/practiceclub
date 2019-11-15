import React, { useState, useEffect, useContext } from "react";
import PracticeList from "./PracticeList";
import { TaskContext } from "../../controller/TaskContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  let today = new Date().getDay();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const saveTime = (index, time) => {
    console.log(index, time);
    // let saveArray = [...times];
    // saveArray[index].time = time;
    // saveArray[index].date = new Date().toLocaleString();
    // setTasks(saveArray);
  };

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-5 text-white">Practice</h2>
        </div>

        <div className="flex justify-center flex-row">
          <div className="flex-1 px-2">
            <PracticeList
              title={weekday[today]}
              tasks={tasks}
              saveTime={saveTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
