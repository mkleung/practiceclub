import React, { useState, useEffect } from "react";

const TimerRow = props => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [checked, setChecked] = useState(false);

  function toggle() {
    setIsActive(!isActive);
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

  // Seconds
  const saveTime = () => {
    if (!checked) {
      props.saveTime(seconds);
    }
    setSeconds(0);
    setIsActive(false);
    setChecked(true);
  };

  var date = new Date(null);
  date.setSeconds(seconds);
  var time = date.toISOString().substr(11, 8);
  var h = time.split(":")[0];
  var m = time.split(":")[1];
  var s = time.split(":")[2];

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-3/4 text-left">
        <div className="flex flex-row items-center">
          <button
            className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-400 hover:bg-gray-500 mr-5"
            onClick={toggle}
          >
            {isActive ? (
              <i className="material-icons text-black-500">stop</i>
            ) : (
              <i className="material-icons text-black-500">play_arrow</i>
            )}
          </button>

          {seconds > 0 ? (
            <div className="tooltip">
              <button
                className={
                  checked
                    ? "rounded-full h-16 w-16 flex items-center justify-center bg-teal-500 text-white"
                    : "rounded-full h-16 w-16 flex items-center justify-center bg-gray-400 hover:bg-gray-500"
                }
                onClick={saveTime}
              >
                <i className="material-icons text-black-500">done</i>
              </button>
              <span className="tooltiptext">Save</span>
            </div>
          ) : (
            ""
          )}

          <h2 className="ml-10 text-3xl pr-5">{props.title}</h2>
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
