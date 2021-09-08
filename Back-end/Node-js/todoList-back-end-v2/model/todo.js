const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const { readTodo, writeTodo } = require('../service/handleDBS');

class Todo {
  constructor(_id, _list, _completed, _dueDate) {
    this.id = _id ? _id : uuidv4();
    this.list = _list;
    this.completed = _completed;
    this.dueDate = _dueDate;
  }

  static create = async ({ list, dueDate, completed }) => {
    try {
      const newTodo = {
        id: uuidv4(),
        list,
        completed: completed ?? false,
        dueDate: new Date(dueDate).toISOString(),
      };
      const todos = await readTodo();
      todos.push(newTodo);
      await writeTodo(todos);
      return new Todo(newTodo.id, newTodo.list, newTodo.completed, newTodo.dueDate);
    } catch (err) {
      console.log(err);
    }
  };

  static findOne = async (obj) => {
    try {
      const todos = await readTodo();
      if (obj) {
        if (obj.where) {
          if (typeof obj.where !== 'object' || Object.keys(obj.where).length === 0) return;
          const arrayCheck = ['id', 'list', 'dueDate', 'completed'];
          for (let key in obj.where) {
            if (!arrayCheck.includes(key) || obj.where[key] === undefined) {
              return;
            }
          }
          const todo = todos.find(
            (item) =>
              (obj.where.id ? item.id === obj.where.id : true) &&
              (obj.where.list ? item.list === obj.where.list : true) &&
              (obj.where.dueDate ? item.dueDate === obj.where.dueDate : true) &&
              (obj.where.completed ? item.completed === obj.where.completed : true)
          );
          const { id, list, dueDate, completed } = todo;
          return new Todo(id, list, completed, dueDate);
        } else {
          return;
        }
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  static findAll = async (obj) => {
    try {
      const todos = await readTodo();
      if (obj?.where) {
        if (typeof obj.where !== 'object' || Object.keys(obj.where).length === 0) return;
        const arrayCheck = ['id', 'list', 'dueDate', 'completed'];
        for (let key in obj.where) {
          if (!arrayCheck.includes(key)) {
            return;
          }
        }
        const { id, list, dueDate, completed } = obj?.where;
        const todosFilter = todos.filter(
          (item) =>
            (id ? item.id === id : true) &&
            (list ? item.list === list : true) &&
            (dueDate ? item.dueDate === dueDate : true) &&
            (completed ? item.completed === completed : true)
        );
        return todosFilter.map((item) => new Todo(item.id, item.list, item.completed, item.dueDate));
      } else {
        return todos.map((item) => new Todo(item.id, item.list, item.completed, item.dueDate));
      }
    } catch (err) {
      console.log(err);
    }
  };

  async update(obj) {
    const todos = await readTodo();
    const index = todos.findIndex((item) => item.id === this.id);
    if (index !== -1) {
      todos[index] = {
        id: this.id,
        list: obj?.list ? obj.list : this.list,
        completed: obj?.completed ? obj.completed : this.completed,
        dueDate: obj?.dueDate ? new Date(obj.dueDate) : this.dueDate,
      };
      await writeTodo(todos);
    }
  }

  async destroy() {
    const todos = await readTodo();
    const newTodos = todos.filter((item) => item.id !== this.id);
    await writeTodo(newTodos);
  }

  static deleteAll = async () => {
    await writeTodo([]);
  };
}

module.exports = Todo;
