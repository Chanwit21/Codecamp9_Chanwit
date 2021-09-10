const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

router.get('/', todoController.getAllTodo);
router.get('/:id', todoController.getById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/delete/all', todoController.deleteAllTodo);
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;
