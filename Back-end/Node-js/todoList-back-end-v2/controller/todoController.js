const { v4: uuidv4 } = require('uuid');
const { readFileFromDBS, writeFileFromDBS } = require('../service/handleDBS');

exports.getAllTodo = async (req, res) => {
  try {
    const todoLists = await readFileFromDBS('todolist');
    res.json({ todos: todoLists });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const targetId = req.params.id;
    const todoLists = await readFileFromDBS('todolist');
    const index = todoLists.findIndex((item) => item.id === targetId);
    if (index === -1) {
      res.status(400).json({ message: 'Todo with this id is not found' });
    } else {
      const todo = todoLists[index];
      res.json({ todo });
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
      const newTodo = {
        id: uuidv4(),
        list: list,
        completed: completed || false,
        dueDate: isNaN(new Date(dueDate).getTime()) ? null : new Date(dueDate),
      };
      const todoLists = await readFileFromDBS('todolist');
      todoLists.push(newTodo);
      await writeFileFromDBS('todolist', todoLists);
      res.status(201).json({ todo: newTodo });
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
      const todoLists = await readFileFromDBS('todolist');
      const index = todoLists.findIndex((item) => item.id === id);
      if (index === -1) {
        res.status(400).json({ message: 'Todo with this id is not found' });
      } else {
        todoLists[index] = { id: id, list: list, dueDate: new Date(dueDate), completed: completed };
        await writeFileFromDBS('todolist', todoLists);
        res.status(201).json({ message: 'successfuly update' });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const params = req.params;
    const todoLists = await readFileFromDBS('todolist');

    const index = todoLists.findIndex((item) => item.id === params.id);
    if (index === -1) {
      res.status(400).json({ message: 'Todo with this id is not found' });
    } else {
      todoLists.splice(index, 1);
      await writeFileFromDBS('todolist', todoLists);
      //   Statuscode 204 มักใช้สำหรับ ลบข้อมูล จะไม่มีการส่ง COntent Body กับไป
      res.status(204).json({ message: 'delete success' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllTodo = async (req, res) => {
  try {
    const todoLists = [];
    await writeFileFromDBS('todolist', todoLists);
    res.status(204).json({ message: 'delete all todo list successed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
