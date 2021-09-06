const express = require('express');
const router = express.Router();
const todoControllers = require('../controller/todo.js');

router.get('/', todoControllers.getAllTodos);
router.get('/:id', todoControllers.getTodoById);
router.post('/', todoControllers.createTodo);
router.put('/:id', todoControllers.updateTodos);
router.delete('/:id', todoControllers.deleteTodo);

module.exports = router;
