const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema } = require("mongoose");

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  duedate: {
    type: Date,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  level: {
    type: String,
    enum: ["high", "medium", "low"],
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
TaskSchema.plugin(AutoIncrement, { inc_field: "taskId" });

module.exports = mongoose.model("task", TaskSchema);
