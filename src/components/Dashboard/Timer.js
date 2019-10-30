import React, { useState } from "react";
import firebase from "../../model/firebase";

const Timer = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form className="bg-white shadow-md rounded p-20" onSubmit={onSubmit}>
        <h2 className="text-xl font-bold mb-10">Timer</h2>
        <div className="md:flex md:items-center">
          <button className="shadow bg-purple-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mb-10 rounded">
            Start
          </button>
        </div>
        <div className="md:flex md:items-center">
          <button className="shadow bg-purple-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Stop
          </button>
        </div>
      </form>
    </>
  );
};

export default Timer;
