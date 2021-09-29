const { List } = require('../models');

exports.getAllTodoList = async (req, res, next) => {
  try {
    const todos = await List.findAll({ where: { userId: req.user.id } });
    res.status(200).json({ todos });
  } catch (err) {
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await List.findOne({ where: { id: id, userId: req.user.id } });
    res.status(200).json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { title, status } = req.body;
    if (title === undefined || status === undefined) {
      return res.status(400).json({ message: 'All content is require' });
    } else if (typeof title !== 'string') {
      return res.status(400).json({ message: 'Title must be a string' });
    } else if (typeof status !== 'boolean') {
      return res.status(400).json({ message: 'status must be a boolean' });
    }

    const todo = await List.create({ title, status, userId: req.user.id });
    res.status(201).json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    console.log(id);
    const [rows] = await List.update({ title, status }, { where: { id: id, userId: req.user.id } });
    if (rows === 0) {
      return res.status(400).json({ message: 'Can not update todo with this id' });
    }
    res.status(200).json({ message: 'Update success' });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await List.destroy({ where: { id: id, userId: req.user.id } });
    if (rows === 0) {
      return res.status(400).json({ message: 'Can not delete todo with this id' });
    }
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
