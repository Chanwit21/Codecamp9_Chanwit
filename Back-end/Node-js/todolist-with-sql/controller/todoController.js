const db = require('../models');

exports.getAllTodo = async (req, res) => {
  try {
    const todoLists = await db.Todo.findAll();
    if (todoLists) {
      res.json({ todos: todoLists });
    } else {
      res.status(500).json({ message: 'Error with setting Model' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const targetId = req.params.id;
    const todo = await db.Todo.findOne({ where: { id: targetId } });
    // const todo = await Todo.findOne({ where: {} });
    console.log(todo);
    if (!todo) {
      res.status(400).json({ message: 'Todo with this id is not found' });
    } else {
      res.status(200).json({ todo });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { list, completed, dueDate } = req.body; //{key1:value1,key2:value2}
    // Validate data ควรเขียนทั้งสองฝั่ง ทั้ง Front และ Back และควรเขียนให้ครอบคลุม
    if (list === undefined || typeof list !== 'string' || list.trim() === '') {
      res.status(400).json({ message: 'list is require and must be a string' });
    } else if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
      res.status(400).json({ message: 'completed must be a boolean' });
    } else {
      const todo = await db.Todo.create({ list, completed, dueDate });
      res.status(201).json({ todo: todo });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { list, dueDate, completed } = req.body;

    if (list === undefined || typeof list !== 'string' || list.trim() === '') {
      res.status(400).json({ message: 'list is require and must be a string' });
    } else if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
      res.status(400).json({ message: 'completed must be a boolean' });
    } else {
      const todo = await db.Todo.findOne({ where: { id: id } });
      if (!todo) {
        res.status(400).json({ message: 'Todo with this id is not found' });
      } else {
        await todo.update({ list, dueDate, completed });
        res.status(201).json({ message: 'successfuly update' });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.Todo.findOne({ where: { id: id } });
    if (!todo) {
      res.status(400).json({ message: 'Todo with this id is not found' });
    } else {
      await todo.destroy();
      //   Statuscode 204 มักใช้สำหรับ ลบข้อมูล จะไม่มีการส่ง COntent Body กับไป
      res.status(204).json({ message: 'delete success' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllTodo = async (req, res) => {
  try {
    await db.Todo.destroy({
      where: {},
      truncate: true,
    });
    res.status(204).json({ message: 'delete all todo list successed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
