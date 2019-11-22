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

  return (
    <div className="pt-10">
      <h2 className="text-xl font-bold mb-2 ">Daily Tasks List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {dates.map((day, index) => {
              return (
                <th key={index} className="px-4 py-2 text-left">
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
                <td key={index} className="border px-4 py-2 align-top">
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
