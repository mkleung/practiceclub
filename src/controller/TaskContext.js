import React, { useEffect, useState } from "react";
import firebase from "../database/firebase";

export const TaskContext = React.createContext();

export const TaskProvider = props => {
  const [tasks, setTasks] = useState([]);

  // INITIALIZE TASKS
  useEffect(() => {
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
