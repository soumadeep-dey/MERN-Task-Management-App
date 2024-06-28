import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaPencilAlt,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const TaskManager = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [copyTasks, setCopyTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);

  const handleTask = () => {
    if (updateTask && input) {
      //update api call
      const updateData = {
        _id: updateTask._id,
        name: input,
      };
      handleUpdate(updateData);
    } else if (updateTask === null && input) {
      //add api call
      handleAddTask();
    }
  };
  useEffect(() => {
    if (updateTask) {
      setInput(updateTask.name);
    }
  }, [updateTask]);

  const handleAddTask = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, {
        name: input,
      });
      setInput("");
      const { success, message } = await res.data;

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      getAllTasks();
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const getAllTasks = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
      const { success, message, allTasks } = await res.data;
      setTasks(allTasks);
      setCopyTasks(allTasks);
    } catch (error) {
      console.log("Failed to fetch tasks", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/tasks/${id}`
      );
      const { success, message } = await res.data;

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      getAllTasks();
    } catch (error) {
      console.log("Failed to delete task", error);
    }
  };
  const handleCheck = async (_id, isDone) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/tasks/${_id}`,
        {
          isDone: !isDone,
        }
      );
      const { success, message } = await res.data;

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      getAllTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };
  const handleUpdate = async (task) => {
    const { _id, name, isDone } = task;
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/tasks/${_id}`,
        {
          name: name,
        }
      );
      setInput("");
      const { success, message } = await res.data;

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      getAllTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const oldTasks = [...copyTasks];
    const searchResults = oldTasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm)
    );
    setTasks(searchResults);
  };

  return (
    <div className="d-flex flex-column align-items-center w-50 m-auto mt-5">
      <h1 className="mb-4">Task Manager App</h1>
      {/* Input and Search Box */}
      <div className="d-flex justify-content-between align-items-center mb-4 w-100">
        <div className="input-group flex-grow-1 me-1">
          <input
            type="text"
            className="form-control me-1"
            placeholder="Add a new task"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-success btn-sm me-2" onClick={handleTask}>
            <FaPlus />
          </button>
        </div>
        <div className="input-group flex-grow-1 me-1">
          <input
            type="text"
            className="form-control me-1"
            placeholder="Search tasks"
            onChange={handleSearch}
          />
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* List of items */}
      <div className="d-flex flex-column w-100">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="m-2 p-2 border bg-light w-199 rounded-3 d-flex justify-content-between align-items-center"
          >
            <span className={task.isDone ? "text-decoration-line-through" : ""}>
              {task.name}
            </span>
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleCheck(task._id, task.isDone)}
              >
                <FaCheck />
              </button>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => setUpdateTask(task)}
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
        ))}
      </div>

      {/* Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
    </div>
  );
};

export default TaskManager;
