const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: { type: String },
    completed: { type: Boolean, default: false },
    due_date: { type: Date, default: null },
  },
  { versionKey: false }
);

module.exports = mongoose.model('todo', todoSchema);
