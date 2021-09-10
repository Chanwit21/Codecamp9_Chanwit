const { readFile, writeFile } = require('fs/promises');

exports.readTodo = async () => {
  const data = await readFile(`data/todolist.json`, 'utf-8');
  return JSON.parse(data);
};

exports.writeTodo = async (data) => {
  await writeFile(`data/todolist.json`, JSON.stringify(data), 'utf-8');
};
