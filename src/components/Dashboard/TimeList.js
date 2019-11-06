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

  return (
    <div className="bg-white shadow-md rounded p-10 text-center">
      <h2 className="text-xl font-bold mb-2 ">
        Daily Tasks for {getCurrentDate()}
      </h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">SELECT TITLE</th>
            <th className="px-4 py-2">TIME</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.times.map((time, index) => (
            <tr className={index % 2 === 0 ? "" : "bg-gray-100"} key={index}>
              <td className="border px-4 py-2">
                {time.id} -{time.title}
              </td>
              <td className="border px-4 py-2">{time.time}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeList;
