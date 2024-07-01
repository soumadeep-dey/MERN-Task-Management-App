import React from "react";
import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";

const TaskListItem = ({
  task,
  handleToggleTask,
  setUpdateTaskItem,
  handleDeleteTask,
}) => {
  return (
    <div className="m-2 p-2 border bg-light rounded-3 d-flex flex-wrap align-items-center">
      <div className="col-auto flex-grow-1 pe-3">
        <span
          className={`d-inline-block ${
            task.isDone ? "text-decoration-line-through" : ""
          }`}
          style={{ wordWrap: "break-word" }}
        >
          {task.name}
        </span>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => handleToggleTask(task._id, task.isDone)}
        >
          <FaCheck />
        </button>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-primary btn-sm me-2"
          onClick={() => setUpdateTaskItem(task)}
        >
          <FaPencilAlt />
        </button>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDeleteTask(task._id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
