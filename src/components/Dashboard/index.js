import React, { useState, useEffect, useContext } from "react";

import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { TaskContext } from "../../controller/TaskContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const addTask = title => {
    console.log("Add Task");
    setTasks(prevTask => [
      ...prevTask,
      {
        id: tasks[tasks.length - 1].id + 1,
        title: title
      }
    ]);
  };

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-5 text-white">Dashboard</h2>
        </div>

        <div className="flex justify-center flex-row">
          <div className="w-1/2 px-2">
            <TaskList tasks={tasks} />
          </div>
          <div className="w-1/2 px-2">
            <AddTask addTask={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
