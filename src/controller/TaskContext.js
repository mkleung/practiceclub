import React, { useEffect, useState } from "react";
import firebase from "../database/firebase";

import Task from "../models/Task";
import Time from "../models/Time";

//import firebase from "../database/firebase";

export const TaskContext = React.createContext();

export const TaskProvider = props => {
  const [times, setTimes] = useState([]);
  const [tasks, setTasks] = useState([]);

  // INITIALIZE TIMES
  useEffect(() => {
    // setTasks([
    //   new Task(1, "Design", ["Monday", "Wednesday"]),
    //   new Task(2, "Programming", ["Monday", "Tuesday", "Thursday"]),
    //   new Task(3, "Marketing", ["Thursday", "Friday"])
    // ]);
    // setTimes([new Time(1, 1, 3, "2019-12-05")]);

    const unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(newTasks);
      });
    // Very important - Close connection to FB
    return () => unsubscribe();
  }, []);

  // ADD TASK
  const addTask = (title, days) => {
    // setTasks(prevTask => [
    //   ...prevTask,
    //   {
    //     id: tasks[tasks.length - 1].id + 1,
    //     title: title,
    //     days: days
    //   }
    // ]);

    firebase
      .firestore()
      .collection("tasks")
      .add({
        title: title,
        days: days
      });
  };

  // EDIT TASK
  const editTask = task => {
    let editTasks = [...tasks];
    for (let i = 0; i < editTasks.length; i++) {
      let editTask = editTasks[i];
      if (task.id === editTask.id) {
        editTask.title = task.title;
        editTask.days = task.days;
      }
    }
    setTasks(editTasks);
  };

  // DELETE TASK
  const deleteTask = id => {
    let deleteTasks = tasks.filter(task => task.id !== id);
    setTasks(deleteTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        times,
        setTimes,
        tasks,
        setTasks,
        addTask,
        deleteTask,
        editTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
