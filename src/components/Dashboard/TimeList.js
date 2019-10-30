import React from "react";

const TimeList = ({ times }) => {
  return (
    <div className="bg-white shadow-md rounded p-10 ">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">TITLE</th>
            <th className="px-4 py-2">TIME</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr className={index % 2 === 0 ? "" : "bg-gray-100"} key={time.id}>
              <td className="border px-4 py-2">{time.id}</td>
              <td className="border px-4 py-2">{time.title}</td>
              <td className="border px-4 py-2">
                <code className="time"> s</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeList;
