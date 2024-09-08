const express = require("express");
const router = express.Router();
const Task = require("../struct/TaskStruct");
const authenticateUser = require("../User/Authenticate");

router.post("/createtask", authenticateUser, async (req, res) => {
  console.log(req.userId);
  try {
    const newTask = await Task.create({
      title: req.body.title,
      description: req.body.description,
      duedate: req.body.duedate,
      level: req.body.level,
      userId: req.userId,
    });

    res.json({ status: true, task: newTask });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
});
router.get("/task", authenticateUser, async (req, res) => {
  try {
    const task = await Task.find({ userId: req.userId });
    res.json(task);
  } catch (err) {
    res.status({ success: false }).json({ error: err.message });
  }
});
router.put("/edittask/:id", authenticateUser, async (req, res) => {
  const { id } = Number(req.params);
  const taskUpdate = req.body;
  console.log(taskUpdate);
  console.log(id);

  try {
    const task = await Task.findOneAndUpdate(
      { id, userId: req.userId },
      { $set: taskUpdate },
      {
        new: true,
      }
    );
    console.log(task);
    if (task) {
      res.json(task);
    } else {
      return console.log("errors");
    }
  } catch (errr) {
    console.error(errr);
  }
});

router.delete("/delete/:id", authenticateUser, async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOne({ taskId });
    console.log(task);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await Task.deleteOne({ taskId });
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(err);

    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
