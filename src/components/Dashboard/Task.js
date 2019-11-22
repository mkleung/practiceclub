import React from "react";

const Task = props => {
  return (
    <>
      <ul>
        {props.tasks.map((task, index) => (
          <li>
            {index} - {task.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Task;
