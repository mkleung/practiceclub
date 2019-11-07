import React, { useState, useEffect, useContext } from "react";
import PracticeList from "./PracticeList";
import { TaskContext } from "../../controller/TaskContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);

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
          <h2 className="text-4xl font-bold mb-5 text-white">Practice Time</h2>
        </div>

        <div className="flex justify-center">
          <div className="px-2">
            <div className="flex -mx-2 bg-white shadow-md rounded p-10 text-center">
              <PracticeList tasks={tasks} saveTime={saveTime} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
