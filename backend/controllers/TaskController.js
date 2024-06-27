const Task = require("../models/TaskModel");

const taskController = {
  createTask: async (req, res) => {
    const data = req.body;
    try {
      const newTask = new Task(data);
      await newTask.save();

      res
        .status(201)
        .json({ success: true, message: "Task created successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  getAllTasks: async (req, res) => {
    try {
      const allTasks = await Task.find({});
      res
        .status(200)
        .json({ success: true, message: "All tasks fetched", allTasks });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  updateTask: async (req, res) => {
    const taskId = req.params.id;
    const data = req.body;
    try {
      const updatedTask = await Task.findByIdAndUpdate(taskId, data);
      if (!updatedTask)
        return res
          .status(404)
          .json({ success: false, message: "Task not found" });
      res.status(200).json({ success: true, message: "Task updated" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  deleteTask: async (req, res) => {
    const taskId = req.params.id;
    try {
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask)
        return res
          .status(404)
          .json({ success: false, message: "Task not found" });
      res.status(200).json({ success: true, message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = taskController;
