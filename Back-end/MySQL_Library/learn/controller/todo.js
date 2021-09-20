const { execute } = require('../db/index');

const getAllTodoLists = async (req, res, next) => {
  try {
    const todos = await execute('SELECT * FROM `lists`');
    //   console.log(result);
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const {id:targetId} = req.params;
    const todo = await execute('SELECT * FROM `lists` WHERE id = ?', [targetId]);
    if (todo.length > 0) {
      res.status(200).json({ todo: todo[0] });
    } else {
      res.status(400).json({ message: 'Id is invalid' });
    }
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
      const result = await execute('INSERT INTO `lists` (title,completed,due_date) VALUES (?,?,?)', [
        title,
        completed,
        due_date,
      ]);
      res.status(201).json({
        todo: {
          id: result.insertId,
          title,
          completed,
          due_date,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

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
      const result = await execute('UPDATE `lists` SET title = ?,completed=?,due_date=? WHERE id = ?', [
        title,
        completed,
        due_date,
        targetId,
      ]);
      // console.log(result);
      res.status(200).json();
    }
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try{
    const targetId = req.params.id;
      const result = await execute('DELETE FROM `lists` WHERE id=?', [targetId]);
      // console.log(result);
      if (result.affectedRows === 0) {
          res.status(400).json({ message: 'cannot delete todo with this id' });
        }else{
          res.status(204).json();
        }
  } catch (err){
    next(err)
  }
};

module.exports = {
  getAllTodoLists,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
