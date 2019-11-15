import React from "react";
import Timer from "./Timer";
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
    <div className="bg-white shadow-md rounded p-5 text-center">
      <h2 className="text-xl font-bold mb-2 ">{props.title}</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-1 py-1">TITLE</th>
            <th className="px-1 py-1">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr className={index % 2 === 0 ? "" : "bg-gray-100"} key={index}>
              <td className="border px-1 py-1">
                {task.id} -{task.title}
              </td>
              <td className="border px-1 py-1">
                <Timer />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeList;
