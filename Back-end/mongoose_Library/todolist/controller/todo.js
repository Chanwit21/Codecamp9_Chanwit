const Todo = require('../model/todo');
const mongoose = require('mongoose');

const getAllTodoLists = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    // console.log(todos);
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const { id: targetId } = req.params;
    const todo = await Todo.find({ _id: targetId });
    // console.log(todo);
    res.status(200).json({ todo: todo[0] });
  } catch (err) {
    next(err);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { title, completed, due_date } = req.body;
    if (title === undefined || completed === undefined) {
      res.status(400).json({ message: 'title and completed must require' });
    } else if (typeof title !== 'string') {
      res.status(400).json({ message: 'titlem must be a String' });
    } else if (typeof completed !== 'boolean') {
      res.status(400).json({ message: 'completed must be a Boolean' });
    } else if (due_date && isNaN(new Date(due_date).getTime())) {
      res.status(400).json({ message: 'due_date is invalid' });
    } else {
      const result = await Todo.create({ title, completed, due_date });
      res.status(201).json({ todo: result });
    }
  } catch (err) {
    next(err);
  }
};

// Have Error ถามพี่เอิร์ธ
const updateTodo = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const { title, completed, due_date } = req.body;
    if (title === undefined || completed === undefined) {
      res.status(400).json({ message: 'title and completed must require' });
    } else if (typeof title !== 'string') {
      res.status(400).json({ message: 'titlem must be a String' });
    } else if (typeof completed !== 'boolean') {
      res.status(400).json({ message: 'completed must be a Boolean' });
    } else if (due_date && isNaN(new Date(due_date).getTime())) {
      res.status(400).json({ message: 'due_date is invalid' });
    } else {
      const result = await Todo.updateOne({ _id: targetId }, { title, completed, due_date });
      res.status(200).json();
    }
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const result = await Todo.deleteOne({ _id: targetId });
    // console.log(result);
    if (result.deletedCount === 0) {
      res.status(400).json({ message: 'cannot delete todo with this id' });
    } else {
      res.status(204).json();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTodoLists,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
