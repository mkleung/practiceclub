import React from "react";
import Task from "./Task";

const TimeList = props => {
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

  let mondays = props.tasks.filter(item => {
    return item.days.includes("Monday");
  });

  let tuesdays = props.tasks.filter(item => {
    return item.days.includes("Tuesday");
  });

  let wednesdays = props.tasks.filter(item => {
    return item.days.includes("Wednesday");
  });

  let thursdays = props.tasks.filter(item => {
    return item.days.includes("Thursday");
  });

  let fridays = props.tasks.filter(item => {
    return item.days.includes("Friday");
  });

  let saturdays = props.tasks.filter(item => {
    return item.days.includes("Saturday");
  });

  let sundays = props.tasks.filter(item => {
    return item.days.includes("Sunday");
  });

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
                <td key={index} className="border px-4 py-2">
                  <Task
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

export default TimeList;
