const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const validator = require('validator');

const getAllTodos = async (req, res, next) => {
  try {
    const data = await fs.readFile('./data/todos.json', 'utf-8');
    const todos = JSON.parse(data);
    res.status(200).json({ todos });
  } catch (err) {
    next(err);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const data = await fs.readFile('./data/todos.json', 'utf-8');
    const todos = JSON.parse(data);
    const idx = todos.findIndex((item) => item.id === targetId);

    if (idx === -1) {
      res.status(400).json({ message: 'Id is invalid' });
    } else {
      const todo = { ...todos[idx] };
      res.status(200).json({ todo });
    }
  } catch (err) {
    next(err);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { list, completed, dueDate } = req.body;

    if (typeof list !== 'string') {
      res.status(400).json({ message: 'list is required to be string' });
    } else if (!validator.isBoolean(completed)) {
      res.status(400).json({ message: 'completed is required to be boolean' });
    } else if (!validator.isDate(new Date(dueDate))) {
      res.status(400).json({ message: 'dueDate is invalid format' });
    } else {
      const todo = { id: uuidv4(), list, completed, dueDate };
      const data = await fs.readFile('./data/todos.json', 'utf-8');
      const todos = JSON.parse(data);
      const newTodos = [...todos];
      newTodos.push(todo);
      await fs.writeFile('../data/todos.json', JSON.stringify(newTodos), 'utf-8');
      res.status(200).json({ todo });
    }
  } catch (err) {
    next(err);
  }
};

const updateTodos = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const { list, completed, dueDate } = req.body;
    const data = await fs.readFile('./data/todos.json', 'utf-8');
    const todos = JSON.parse(data);
    const newTodos = [...todos];
    const idx = newTodos.findIndex((item) => item.id === targetId);

    if (typeof list !== 'string') {
      res.status(400).json({ message: 'list is required to be string' });
    } else if (!validator.isBoolean(completed)) {
      res.status(400).json({ message: 'completed is required to be boolean' });
    } else if (!validator.isDate(new Date(dueDate))) {
      res.status(400).json({ message: 'dueDate is invalid format' });
    } else if (idx === -1) {
      res.status(400).json({ message: 'Id is invalid' });
    } else {
      newTodos[idx] = { id: targetId, list, completed, dueDate };
      await fs.writeFile('../data/todos.json', JSON.stringify(newTodos), 'utf-8');
      res.status(200).json({ message: 'Update success' });
    }
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const data = await fs.readFile('./data/todos.json', 'utf-8');
    const todos = JSON.parse(data);
    const idx = todos.findIndex((item) => item.id === targetId);
    if (idx === -1) {
      res.status(400).json({ message: 'Id is invalid' });
    } else {
      const newTodos = todos.filter((item) => item.id !== targetId);
      await fs.writeFile('../data/todos.json', JSON.stringify(newTodos), 'utf-8');
      res.status(200).json({ message: 'Delete success' });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllTodos, getTodoById, createTodo, updateTodos, deleteTodo };
