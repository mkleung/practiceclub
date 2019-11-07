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
    <div className="bg-white shadow-md rounded p-10 text-center">
      <h2 className="text-xl font-bold mb-2 ">Tasks List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">TITLE</th>
            <th className="px-4 py-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <tr className={index % 2 === 0 ? "" : "bg-gray-100"} key={index}>
              <td className="border px-4 py-2">{task.id}</td>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">
                <button className="mr-5">Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeList;
