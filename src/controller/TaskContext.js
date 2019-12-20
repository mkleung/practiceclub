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
    const unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(newTasks);
        setTasks(newTasks);
      });
    // Very important - Close connection to FB
    return () => unsubscribe();
  }, []);

  // ADD TASK
  const addTask = (title, days) => {
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
    // let editTasks = [...tasks];
    // for (let i = 0; i < editTasks.length; i++) {
    //   let editTask = editTasks[i];
    //   if (task.id === editTask.id) {
    //     editTask.title = task.title;
    //     editTask.days = task.days;
    //   }
    // }
    // setTasks(editTasks);

    firebase
      .firestore()
      .collection("tasks")
      .doc(task.id)
      .update({
        title: task.title,
        days: task.days
      })
      .then(function() {
        console.log("Document successfully updates!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  // DELETE TASK
  const deleteTask = id => {
    // let deleteTasks = tasks.filter(task => task.id !== id);
    // setTasks(deleteTasks);

    firebase
      .firestore()
      .collection("tasks")
      .doc(id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
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
