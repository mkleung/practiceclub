import React, { useState, useEffect } from "react";

const TimerRow = props => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  var date = new Date(null);
  date.setSeconds(seconds);
  var time = date.toISOString().substr(11, 8);
  var h = time.split(":")[0];
  var m = time.split(":")[1];
  var s = time.split(":")[2];

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-3/4 text-left">
        <h2 className="mb-5 text-3xl">{props.title}</h2>
        <div className="flex flex-row items-center">
          <button
            className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-400 hover:bg-gray-500 mr-5"
            onClick={toggle}
          >
            {isActive ? "STOP" : "START"}
          </button>
          <button
            className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-400 hover:bg-gray-500"
            onClick={() => props.addTime(props.taskId, seconds)}
          >
            SAVE
          </button>
        </div>
      </div>
      <div className="w-1/4 text-6xl flex flex-row space-between ">
        <div>{h}</div>
        <div>:{m}:</div>
        <div>{s}</div>
      </div>
    </div>
  );
};

export default TimerRow;
