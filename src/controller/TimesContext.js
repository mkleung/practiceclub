import React, { useEffect, useState, useContext } from "react";
import firebase from "../database/firebase";
import { AuthContext } from "./AuthContext";
export const TimesContext = React.createContext();

export const TimesProvider = props => {
  const [times, setTimes] = useState([]);

  const { currentUser } = useContext(AuthContext);

  // INITIALIZE TIMES
  useEffect(() => {
    if (currentUser) {
      const unsubscribe = firebase
        .firestore()
        .collection("times")
        .where("user_id", "==", currentUser.uid)
        .onSnapshot(snapshot => {
          const newTimes = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setTimes(newTimes);
        });
      // Very important - Close connection to FB
      return () => unsubscribe();
    }
  }, [currentUser]);

  // ADD TIME
  const addTime = (userId, taskId, seconds) => {
    firebase
      .firestore()
      .collection("times")
      .add({
        user_id: userId,
        task_id: taskId,
        time: seconds,
        date: new Date()
      });
  };

  // // EDIT TASK
  // const editTime = task => {
  //   firebase
  //     .firestore()
  //     .collection("tasks")
  //     .doc(task.id)
  //     .update({
  //       title: task.title,
  //       days: task.days
  //     })
  //     .then(function() {
  //       console.log("Document successfully updates!");
  //     })
  //     .catch(function(error) {
  //       console.error("Error removing document: ", error);
  //     });
  // };

  // // DELETE TASK
  // const deleteTime = id => {
  //   firebase
  //     .firestore()
  //     .collection("times")
  //     .doc(id)
  //     .delete()
  //     .then(function() {
  //       console.log("Document successfully deleted!");
  //     })
  //     .catch(function(error) {
  //       console.error("Error removing document: ", error);
  //     });
  // };

  return (
    <TimesContext.Provider
      value={{
        times,
        setTimes,
        addTime
      }}
    >
      {props.children}
    </TimesContext.Provider>
  );
};
