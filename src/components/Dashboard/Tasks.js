import React from "react";
import EditTaskModal from "./EditTaskModal";

const Tasks = props => {
  return (
    <>
      <ul>
        {props.tasks.map((task, index) => (
          <li className="flex items-center justify-between">
            {task.title}{" "}
            <EditTaskModal task={task} deleteTask={props.deleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
