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

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-2/3 text-left">
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
            onClick={() => props.saveTime(props.index, seconds)}
          >
            SAVE
          </button>
        </div>
      </div>
      <div className="w-1/3 text-6xl">{seconds}</div>
    </div>
  );
};

export default TimerRow;
