import React, { useState, useEffect, useContext } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskList from "./TaskList";
import { TaskContext } from "../../controller/TaskContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const addTask = (title, days) => {
    setTasks(prevTask => [
      ...prevTask,
      {
        id: tasks[tasks.length - 1].id + 1,
        title: title,
        days: days
      }
    ]);
  };

  const deleteTask = id => {
    let deleteTasks = tasks.filter(task => task.id !== id);
    setTasks(deleteTasks);
  };

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6 ">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-5 text-white">Dashboard</h2>
        </div>

        <div className="bg-white shadow-md rounded p-10">
          <AddTaskModal addTask={addTask} />

          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

export default Dashboard;
