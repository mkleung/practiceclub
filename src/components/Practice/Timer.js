import React, { useState, useEffect } from "react";

const Timer = props => {
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
    <div className="flex">
      <div className=" flex justify-center items-center flex-2 mr-5 text-center">
        {seconds}s
      </div>
      <div className="flex-2">
        <button
          className={
            isActive
              ? "w-20 mr-2 bg-teal-500 text-white font-bold py-2 px-4 rounded"
              : "w-20 mr-2 bg-purple-500 text-white font-bold py-2 px-4 rounded"
          }
          onClick={toggle}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button
          className=" w-20 bg-teal-500  text-white font-bold py-2 px-4 rounded"
          onClick={() => props.saveTime(props.index, seconds)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Timer;