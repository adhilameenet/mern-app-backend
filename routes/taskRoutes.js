const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Create Task
router.post("/tasks", async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Tasks
router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Delete Task
router.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted" });
});

module.exports = router;
