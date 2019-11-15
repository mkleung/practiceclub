import React, { useState, useEffect } from "react";
import "./dashboard.scss";

const AddTaskModal = ({ addTask }) => {
  const [showModal, setShowModal] = useState(false);

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const [title, setTitle] = useState("");
  const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(true);
  const [wednesday, setWednesday] = useState(true);
  const [thursday, setThursday] = useState(true);
  const [friday, setFriday] = useState(true);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  const handleCheckboxEveryday = () => {
    setMonday(true);
    setTuesday(true);
    setWednesday(true);
    setThursday(true);
    setFriday(true);
    setSaturday(true);
    setSunday(true);
  };

  const handleCheckboxChange = day => {
    switch (day) {
      case "Monday":
        setMonday(!monday);
        break;
      case "Tuesday":
        setTuesday(!tuesday);
        break;
      case "Wednesday":
        setWednesday(!wednesday);
        break;
      case "Thursday":
        setThursday(!thursday);
        break;
      case "Friday":
        setFriday(!friday);
        break;
      case "Saturday":
        setSaturday(!saturday);
        break;
      case "Sunday":
        setSunday(!sunday);
        break;
      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    let daysArray = [
      monday ? "Monday" : null,
      tuesday ? "Tuesday" : null,
      wednesday ? "Wednesday" : null,
      thursday ? "Thursday" : null,
      friday ? "Friday" : null,
      saturday ? "Saturday" : null,
      sunday ? "Sunday" : null
    ];
    if (title !== "") {
      addTask(title, daysArray);
    }
  };

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <form onSubmit={onSubmit}>
            <h2 className="text-xl font-bold mb-2">Add Task</h2>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Add Title
                </label>
              </div>

              <div className="md:w-2/3">
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.currentTarget.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <div className="block">
                  <span class="text-gray-700">Select a day</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox text-indigo-600"
                        checked={monday}
                        onChange={() => handleCheckboxChange("Monday")}
                      />
                      <span class="ml-2">Monday</span>
                    </label>
                  </div>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={tuesday}
                        class="form-checkbox text-indigo-600"
                        onChange={() => handleCheckboxChange("Tuesday")}
                      />
                      <span class="ml-2">Tuesday</span>
                    </label>
                  </div>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={wednesday}
                        class="form-checkbox text-indigo-600"
                        onChange={() => handleCheckboxChange("Wednesday")}
                      />
                      <span class="ml-2">Wednesday</span>
                    </label>
                  </div>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={thursday}
                        class="form-checkbox text-indigo-600"
                        onChange={() => handleCheckboxChange("Thursday")}
                      />
                      <span class="ml-2">Thursday</span>
                    </label>
                  </div>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={friday}
                        class="form-checkbox text-indigo-600"
                        onChange={() => handleCheckboxChange("Friday")}
                      />
                      <span class="ml-2">Friday</span>
                    </label>
                  </div>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={saturday}
                        class="form-checkbox text-indigo-600"
                        onChange={() => handleCheckboxChange("Saturday")}
                      />
                      <span class="ml-2">Saturday</span>
                    </label>
                  </div>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={sunday}
                        class="form-checkbox text-indigo-600"
                        onChange={() => handleCheckboxChange("Sunday")}
                      />
                      <span class="ml-2">Sunday</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button
                  className="mr-5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add Task
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Task
      </button>
    </>
  );
};

export default AddTaskModal;
