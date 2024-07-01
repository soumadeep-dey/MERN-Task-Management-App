import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
  toggleTask,
} from "./utils/apiService";
import { TaskInput, TaskListItem } from "./components";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [copyTasks, setCopyTasks] = useState([]);
  const [updateTaskItem, setUpdateTaskItem] = useState(null);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const allTasks = await getAllTasks();
      setTasks(allTasks);
      setCopyTasks(allTasks);
    } catch (error) {
      console.log("Failed to fetch tasks", error);
    }
  };

  const handleTaskAction = () => {
    if (updateTaskItem && input) {
      const updateData = {
        _id: updateTaskItem._id,
        name: input,
      };
      handleUpdateTask(updateData);
    } else if (!updateTaskItem && input) {
      handleAddTask();
    }
  };

  useEffect(() => {
    if (updateTaskItem) {
      setInput(updateTaskItem.name);
    }
  }, [updateTaskItem]);

  const handleAddTask = async () => {
    try {
      const { success, message } = await addTask(input);

      if (success) {
        setInput("");
        toast.success(message);
      } else {
        toast.error(message);
      }
      fetchAllTasks();
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const { success, message } = await deleteTask(id);

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      fetchAllTasks();
    } catch (error) {
      console.log("Failed to delete task", error);
    }
  };

  const handleToggleTask = async (_id, isDone) => {
    try {
      const { success, message } = await toggleTask(_id, !isDone);

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      fetchAllTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const handleUpdateTask = async (updatedData) => {
    try {
      const { _id, name } = updatedData;
      const { success, message } = await updateTask(_id, { name });

      if (success) {
        setInput("");
        toast.success(message);
      } else {
        toast.error(message);
      }
      fetchAllTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTasks = copyTasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm)
    );
    setTasks(filteredTasks);
  };

  return (
    <div className="d-flex flex-column align-items-center w-100 m-auto mt-5">
      <h1 className="mb-4">Task Manager App</h1>

      <div className="d-flex justify-content-between align-items-center mb-4 w-50">
        <TaskInput
          input={input}
          setInput={setInput}
          handleTaskAction={handleTaskAction}
        />
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

      <div className="d-flex flex-column w-50">
        {tasks.map((task) => (
          <TaskListItem
            key={task._id}
            task={task}
            handleToggleTask={handleToggleTask}
            setUpdateTaskItem={setUpdateTaskItem}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
    </div>
  );
};

export default App;
