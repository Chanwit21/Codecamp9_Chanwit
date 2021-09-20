const express = require('express');
const router = express.Router();
const { getAllTodoLists, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controller/todo');

router.get('/', getAllTodoLists);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
