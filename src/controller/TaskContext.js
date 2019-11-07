import React, { useEffect, useState } from "react";
//import firebase from "../model/firebase";

export const TaskContext = React.createContext();

export const TaskProvider = props => {
  const [times, setTimes] = useState([]);
  const [tasks, setTasks] = useState([]);

  // INITIALIZE TIMES
  useEffect(() => {
    setTasks([
      { id: 1, title: "Design" },
      { id: 2, title: "Programming" },
      { id: 3, title: "Marketing" }
    ]);

    setTimes([
      { id: 1, task_id: 1, time: 0, date: "" },
      { id: 2, task_id: 2, time: 0, date: "" },
      { id: 3, task_id: 1, time: 0, date: "" }
    ]);
  }, []);

  return (
    <TaskContext.Provider value={{ times, setTimes, tasks, setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};