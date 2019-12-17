import React, { useEffect, useState } from "react";
import Task from "../models/Task";
import Time from "../models/Time";

//import firebase from "../database/firebase";

export const TaskContext = React.createContext();

export const TaskProvider = props => {
  const [times, setTimes] = useState([]);
  const [tasks, setTasks] = useState([]);

  // INITIALIZE TIMES
  useEffect(() => {
    setTasks([
      new Task(1, "Design", ["Monday", "Wednesday"]),
      new Task(2, "Programming", ["Monday", "Tuesday", "Thursday"]),
      new Task(3, "Marketing", ["Thursday", "Friday"])
    ]);
    setTimes([new Time(1, 1, 3, "2019-12-05")]);
  }, []);

  // ADD TASK
  useEffect(() => {
    console.log("Add task");
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ times, setTimes, tasks, setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};
