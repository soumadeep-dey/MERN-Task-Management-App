import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/tasks`;

// Function to fetch all tasks
export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    console.log(API_BASE_URL);
    return response.data.allTasks;
  } catch (error) {
    throw error;
  }
};

// Function to add a new task
export const addTask = async (name) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, { name });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to delete a task
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update a task
export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to toggle the 'done' status of a task
export const toggleTask = async (id, isDone) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, { isDone });
    return response.data;
  } catch (error) {
    throw error;
  }
};
