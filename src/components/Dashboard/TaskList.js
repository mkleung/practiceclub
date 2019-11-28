import React from "react";
import Tasks from "./Tasks";

const TaskList = props => {
  const getCurrentDate = (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month}/${date}/${year}`;
  };

  let dates = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var d = new Date();
  var n = dates[d.getDay() - 1];

  return (
    <div className="pt-10">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {dates.map((day, index) => {
              return (
                <th
                  key={index}
                  className={
                    day === n ? "px-4 py-2 text-left bg-teal-100" : "px-4 py-2"
                  }
                >
                  {day}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dates.map((day, index) => {
              return (
                <td
                  key={index}
                  className={
                    day === n
                      ? "border px-4 py-2 align-top bg-teal-100"
                      : "border px-4 py-2 align-top"
                  }
                >
                  <Tasks
                    editTask={props.editTask}
                    deleteTask={props.deleteTask}
                    tasks={props.tasks.filter(item => {
                      return item.days.includes(day);
                    })}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
