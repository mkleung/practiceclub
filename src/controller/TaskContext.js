import React, { useEffect, useState, useContext } from "react";
import firebase from "../database/firebase";
import { AuthContext } from "./AuthContext";

export const TaskContext = React.createContext();

export const TaskProvider = props => {
  const [tasks, setTasks] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      const unsubscribe = firebase
        .firestore()
        .collection("tasks")
        .where("user_id", "==", currentUser.uid)
        .onSnapshot(snapshot => {
          const newTasks = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setTasks(newTasks);
        });

      // Very important - Close connection to FB
      return () => unsubscribe();
    }
  }, [currentUser]);

  // INITIALIZE TASKS
  // useEffect(() => {
  //   // const unsubscribe = firebase
  //   //   .firestore()
  //   //   .collection("tasks")
  //   //   .onSnapshot(snapshot => {
  //   //     const newTasks = snapshot.docs.map(doc => ({
  //   //       id: doc.id,
  //   //       ...doc.data()
  //   //     }));

  //   //     setTasks(newTasks);
  //   //   });

  //   // const unsubscribe = firebase
  //   //   .firestore()
  //   //   .collection("tasks")
  //   //   .onSnapshot(snapshot => {
  //   //     const newTasks = snapshot.docs.map(doc => ({
  //   //       id: doc.id,
  //   //       ...doc.data()
  //   //     }));
  //   //     setTasks(newTasks);
  //   //   });

  //   const unsubscribe = firebase
  //     .firestore()
  //     .collection("tasks")
  //     .where("user_id", "==", "LwTZWIm8bYhtF2gqhue71zbL3gx1")
  //     .onSnapshot(snapshot => {
  //       const newTasks = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }));
  //       setTasks(newTasks);
  //     });

  //   // Very important - Close connection to FB
  //   return () => unsubscribe();
  // }, []);

  // ADD TASK
  const addTask = (title, days, currentUser) => {
    firebase
      .firestore()
      .collection("tasks")
      .add({
        title: title,
        days: days,
        user_id: currentUser.uid
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
