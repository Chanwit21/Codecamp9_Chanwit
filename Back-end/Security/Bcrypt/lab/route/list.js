const express = require('express');
const { authenticate } = require('../controller/authController');
const router = express.Router();
const listController = require('../controller/list');

router.get('/', authenticate, listController.getAllTodoList);
router.get('/:id', authenticate, listController.getTodoById);
router.post('/', authenticate, listController.createTodo);
router.put('/:id', authenticate, listController.updateTodo);
router.delete('/:id', authenticate, listController.deleteTodo);

module.exports = router;
