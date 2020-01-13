import React, { useEffect, useState } from "react";
import firebase from "../database/firebase";

export const TimesContext = React.createContext();

export const TimesProvider = props => {
  const [times, setTimes] = useState([]);

  // INITIALIZE TIMES
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTimes(newTimes);
      });
    // Very important - Close connection to FB
    return () => unsubscribe();
  }, []);

  // ADD TIME
  const addTime = (currentUser, seconds) => {
    console.log("user" + JSON.stringify(currentUser));
    console.log(currentUser.uid);
    console.log("add time" + seconds);
    // firebase
    //   .firestore()
    //   .collection("times")
    //   .add({
    //     task_id: task_id,
    //     time: time,
    //     date: date
    //   });
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
