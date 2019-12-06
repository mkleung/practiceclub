import React from "react";
import TimerRow from "./TimerRow";
const TimeList = props => {
  const getCurrentDate = (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month}/${date}/${year}`;
  };

  let tasks = props.tasks.filter(item => item.days.includes(props.title));

  return (
    <div className="bg-white shadow-md rounded p-10 text-center">
      {tasks.map((task, index) => (
          <TimerRow
           key={index}
            taskId={task.id}
            title={task.title}
            saveTime={props.saveTime}
          />
      ))}
    </div>
  );
};

export default TimeList;
