const { readTodo } = require('../service/handleDBS');
const Todo = require('../model/todo');

exports.checkParamsId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
      res.status(400).json({ message: 'Todo with this id is not found' });
    } else {
      req.todo = todo;
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.validateTodoBody = async (req, res, next) => {
  const { list, completed, dueDate } = req.body; //{key1:value1,key2:value2}
  // Validate data ควรเขียนทั้งสองฝั่ง ทั้ง Front และ Back และควรเขียนให้ครอบคลุม
  if (list === undefined || typeof list !== 'string' || list.trim() === '') {
    res.status(400).json({ message: 'list is require and must be a string' });
  } else if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
    res.status(400).json({ message: 'completed must be a boolean' });
  } else {
    next();
  }
};
