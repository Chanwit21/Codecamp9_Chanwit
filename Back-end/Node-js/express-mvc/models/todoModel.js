const { readFile, writeFile } = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

class Todo {
  constructor(_list, _completed) {
    this.list = _list;
    this.completed = _completed;
  }

  static findAll = async () => {
    const data = await readFile('dbs/todos.json', 'utf-8');
    const todos = JSON.parse(data);
    return todos;
  };

  static create = async (todo) => {
    const data = await readFile('dbs/todos.json', 'utf-8');
    const todos = JSON.parse(data);
    todos.push({
      id: uuidv4(),
      ...todo,
    });
    await writeFile('dbs/todos.json', JSON.stringify(todos), 'utf-8');
  };

  //   save() {
  //     if (this.id) {
  //       // Update
  //       const update = async () => {
  //         const data = await readFile('dbs/todos.json', 'utf-8');
  //         const todos = JSON.parse(data);
  //         const index = todos.findIndex((item) => item.id === this.id);
  //         todos[index] = { ...this };
  //         await writeFile('dbs/todos.json', JSON.stringify(todos));
  //       };
  //       update();
  //     } else {
  //       // Create
  //       const create = async () => {
  //         const data = await readFile('dbs/todos.json', 'utf-8');
  //         const todos = JSON.parse(data);
  //         todos.push({
  //           id: uuidv4(),
  //           list: this.list,
  //           completed: this.completed,
  //         });
  //         await writeFile('dbs/todos.json', JSON.stringify(todos));
  //       };
  //       create();
  //     }
  //   }
}

module.exports = Todo;
