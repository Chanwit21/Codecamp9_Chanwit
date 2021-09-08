const { v4: uuidv4 } = require('uuid');
const { readTodo, writeTodo } = require('../service/handleDBS');
const Todo = require('../model/todo');

exports.getAllTodo = async (req, res) => {
  try {
    const todoLists = await Todo.findAll();
    if (todoLists) {
      res.json({ todos: todoLists });
    } else {
      res.status(500).json({ message: 'Error with setting Model' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const filterTodo = async ({ list, completed }) => {
  const todos = await Todo.findAll();
  const todosFilter = todos.filter(
    (item) =>
      item.list.toLowerCase().includes(list ? list.toLowerCase() : '') &&
      (completed === undefined ||
        !['true', 'false'].includes(completed.toLowerCase()) ||
        item.completed.toString() === completed)
  );
  return todosFilter;
};

exports.getTodoByFilter = async (req, res, next) => {
  try {
    const { list, completed } = req.query;
    const result = await filterTodo({ list, completed });
    res.status(200).json({ todos: result });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const todo = req.todo;
    res.status(200).json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo: todo });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await req.todo.update(req.body);
    res.status(201).json({ message: 'successfuly update' });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = req.todo;
    await todo.destroy();
    //   Statuscode 204 มักใช้สำหรับ ลบข้อมูล จะไม่มีการส่ง COntent Body กับไป
    res.status(204).json({ message: 'delete success' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllTodo = async (req, res) => {
  try {
    await Todo.deleteAll();
    res.status(204).json({ message: 'delete all todo list successed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
