import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import Task from "../../models/Task";

const EditTaskModal = props => {
  const [showModal, setShowModal] = useState(false);

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const [title, setTitle] = useState();
  const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(true);
  const [wednesday, setWednesday] = useState(true);
  const [thursday, setThursday] = useState(true);
  const [friday, setFriday] = useState(true);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  // Constructor
  useEffect(() => {
    setTitle(props.task.title);
    setMonday(props.task.days.includes("Monday") ? true : false);
    setTuesday(props.task.days.includes("Tuesday") ? true : false);
    setWednesday(props.task.days.includes("Wednesday") ? true : false);
    setThursday(props.task.days.includes("Thursday") ? true : false);
    setFriday(props.task.days.includes("Friday") ? true : false);
    setSaturday(props.task.days.includes("Saturday") ? true : false);
    setSunday(props.task.days.includes("Sunday") ? true : false);
  }, []);

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
      // props.editTask(props.task.id, title);

      props.editTask(new Task(props.task.id, title, daysArray));
      setShowModal(false);
    }
  };

  const deleteTask = id => {
    setShowModal(false);
    props.deleteTask(id);
  };

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <button
            type="button"
            className="closeModalButton"
            onClick={() => setShowModal(false)}
          >
            <i className="material-icons text-black">close</i>
          </button>

          <form onSubmit={onSubmit}>
            <h2 className="text-xl font-bold">Edit Task</h2>
            <div className="mt-5 mb-5">
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.currentTarget.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
              />
            </div>

            <div className="md:flex md:items-center mb-6">
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

                <div className="mt-5">
                  <button
                    className="mr-5 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="bg-transparent text-red-800 font-bold py-2 px-4 rounded"
                    onClick={() => deleteTask(props.task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>

      <button
        className=""
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <i className="material-icons text-blue-500">edit</i>
      </button>
    </>
  );
};

export default EditTaskModal;
