import React, { useState, useEffect, useContext } from "react";

import TimesList from "./TimeList";
import AddTaskForm from "./AddTask";
import Timer from "./Timer";
import firebase from "../../model/firebase";
import { TaskContext } from "../../controller/TaskContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

// custom hook
// function useTimes() {
//   const [times, setTimes] = useState([]);

// INITIALIZE
//   useEffect(() => {
//     setTimes([
//       { id: 1, title: "test1" },
//       { id: 2, title: "test2" },
//       { id: 3, title: "test4123123" },
//       { id: 4, title: "test5" },
//       { id: 5, title: "test6" }
//     ]);
//   }, []);

//   // PULL DATA FROM FIRESTORE
//   // useEffect(() => {
//   //   const unsubscribe = firebase
//   //     .firestore()
//   //     .collection("times")
//   //     .onSnapshot(snapshot => {
//   //       const newTimes = snapshot.docs.map(doc => ({
//   //         id: doc.id,
//   //         ...doc.data()
//   //       }));
//   //       setTimes(newTimes);
//   //     });

//   //   // close websocket
//   //   // VERY IMPORTANT
//   //   return () => unsubscribe();
//   // }, []);

//   return times;
// }

const Dashboard = () => {
  const { times, setTimes } = useContext(TaskContext);

  const addTime = title => {
    setTimes(prevTime => [
      ...prevTime,
      {
        id: times[times.length - 1].id + 1,
        title: title
      }
    ]);
  };

  const saveTime = (index, time) => {
    let saveArray = [...times];
    saveArray[index].time = time;
    saveArray[index].date = new Date().toLocaleString();
    setTimes(saveArray);
  };

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-5 text-white">Dashboard</h2>
        </div>

        <div className="flex justify-center">
          <div className="px-2">
            <div className="flex -mx-2">
              <div className="w-1/3 px-2">
                <AddTaskForm addTime={addTime} />
              </div>
              <div className="w-2/3 px-2">
                <TimesList times={times} saveTime={saveTime} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
