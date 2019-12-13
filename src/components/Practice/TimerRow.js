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

          <h2 className="ml-10 text-3xl pr-5">{props.title}</h2>

          {/* <div
            className="bg-teal-100 border border-teal-500 text-teal-500 px-3 py-3 rounded-full  flex"
            role="alert"
          >
            <strong className="font-bold">Checked</strong>
            <svg
              className="fill-current h-6 w-6 text-teal-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </div> */}
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
