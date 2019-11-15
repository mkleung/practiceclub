import React from "react";

const TimeList = props => {
  const getCurrentDate = (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month}/${date}/${year}`;
  };

  return (
    <div className="pt-10">
      <h2 className="text-xl font-bold mb-2 ">Daily Tasks List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Monday</th>
            <th className="px-4 py-2 text-left">Tuesday</th>
            <th className="px-4 py-2 text-left">Wednesday</th>
            <th className="px-4 py-2 text-left">Thursday</th>
            <th className="px-4 py-2 text-left">Friday</th>
            <th className="px-4 py-2 text-left">Saturday</th>
            <th className="px-4 py-2 text-left">Sunday</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <tr className={index % 2 === 0 ? "" : "bg-gray-100"} key={index}>
              <td className="border px-4 py-2">{task.id}</td>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">
                <ul>
                  {task.days.map((day, index) => {
                    return <li key={index}>{day}</li>;
                  })}
                </ul>
              </td>
              <td className="border px-4 py-2">
                <button onClick={() => props.deleteTask(task.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeList;
