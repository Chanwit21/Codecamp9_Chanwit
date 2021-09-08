const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');
const todoMiddleWare = require('../middleware/todoMiddleware');

router.get('/', todoController.getAllTodo);
router.get('/query', todoController.getTodoByFilter);
router.get('/:id', todoMiddleWare.checkParamsId, todoController.getById);
router.post('/', todoMiddleWare.validateTodoBody, todoController.createTodo);
router.put('/:id', todoMiddleWare.checkParamsId, todoMiddleWare.validateTodoBody, todoController.updateTodo);
router.delete('/delete/all', todoMiddleWare.checkParamsId, todoController.deleteAllTodo);
router.delete('/delete/:id', todoMiddleWare.checkParamsId, todoController.deleteTodo);

module.exports = router;
