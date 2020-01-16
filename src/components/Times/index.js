import React, { useState, useEffect, useContext } from "react";
import { TimesContext } from "../../controller/TimesContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Times = () => {
  const { times } = useContext(TimesContext);

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6 ">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-5 text-white">Times</h2>
        </div>

        <div className="bg-white shadow-md rounded p-10">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">user_id</th>
                <th className="px-4 py-2">task_id</th>
                <th className="px-4 py-2">time (s)</th>
                <th className="px-4 py-2">date</th>
              </tr>
            </thead>
            <tbody>
              {times.map((item, index) => (
                <tr key={index} className="border px-4 py-2">
                  <td class="border px-4 py-2">{item.user_id}</td>
                  <td class="border px-4 py-2">{item.task_id}</td>
                  <td class="border px-4 py-2">{item.time}</td>
                  <td class="border px-4 py-2">date</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

export default Times;
