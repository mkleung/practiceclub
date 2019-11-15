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
    <div className="flex justify-center items-center flex-col">
      <div>{seconds}s</div>

      <button
        className={
          isActive
            ? "w-20 bg-teal-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2"
            : "w-20 bg-purple-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2"
        }
        onClick={toggle}
      >
        {isActive ? "STOP" : "START"}
      </button>
      <button
        style={{ backgroundColor: "#FF7C1F" }}
        className=" w-20 bg-teal-500  text-white font-bold py-2 px-4 rounded"
        onClick={() => props.saveTime(props.index, seconds)}
      >
        SAVE
      </button>
    </div>
  );
};

export default Timer;
