import React from "react";
import { FaPlus } from "react-icons/fa";

const TaskInput = ({ input, setInput, handleTaskAction }) => {
  return (
    <div className="input-group flex-grow-1 me-1">
      <input
        type="text"
        className="form-control me-1"
        placeholder="Add a new task"
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-success btn-sm me-2" onClick={handleTaskAction}>
        <FaPlus />
      </button>
    </div>
  );
};

export default TaskInput;
