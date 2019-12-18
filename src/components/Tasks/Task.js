import React from "react";
import EditTaskModal from "./EditTaskModal";

const Task = props => {
  return (
    <>
      <ul>
        {props.tasks.map((task, index) => (
          <li className="flex items-center justify-between">
            {task.title}{" "}
            <EditTaskModal
              task={task}
              editTask={props.editTask}
              deleteTask={props.deleteTask}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Task;
