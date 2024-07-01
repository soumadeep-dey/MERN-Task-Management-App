import React from "react";
import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";

const TaskListItem = ({ task, handleToggleTask, setUpdateTaskItem, handleDeleteTask }) => {
  return (
    <div className="m-2 p-2 border bg-light rounded-3 d-flex justify-content-between align-items-center">
      <span className={task.isDone ? "text-decoration-line-through" : ""}>
        {task.name}
      </span>
      <div>
        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => handleToggleTask(task._id, task.isDone)}
        >
          <FaCheck />
        </button>
        <button
          className="btn btn-primary btn-sm me-2"
          onClick={() => setUpdateTaskItem(task)}
        >
          <FaPencilAlt />
        </button>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => handleDeleteTask(task._id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
