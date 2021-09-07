const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const { readFile, writeFile } = require('fs/promises');

// Pass json to body object
app.use(express.json());
// Pass urlencode to body object
app.use(express.urlencoded({ extended: false }));

//Routing for getting todo
// GET /
app.get('/', async (req, res) => {
  try {
    const data = await readFile('./data/todolist.json', 'utf-8');
    const todoLists = JSON.parse(data);
    res.json({ todos: todoLists });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routing for creating todo
// POST /create
app.post('/create', async (req, res) => {
  try {
    const { list, completed, dueDate } = req.body; //{key1:value1,key2:value2}
    // Validate data ควรเขียนทั้งสองฝั่ง ทั้ง Front และ Back และควรเขียนให้ครอบคลุม
    //   if (list === undefined) {
    //     res.status(400).json({ message: 'list is require' });
    //   } else if (typeof list !== 'string') {
    //     res.status(400).json({ message: 'list must be a string' });
    //   } else if (list.trim() === '') {
    //     res.status(400).json({ message: 'list is require' });
    //   }

    if (list === undefined || typeof list !== 'string' || list.trim() === '') {
      res.status(400).json({ message: 'list is require and must be a string' });
    } else if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
      res.status(400).json({ message: 'completed must be a boolean' });
    } else {
      const newTodo = {
        id: uuidv4(),
        list: list,
        completed: completed || false,
        dueDate: isNaN(new Date(dueDate).getTime()) ? null : new Date(dueDate),
      };

      const data = await readFile('./data/todolist.json', 'utf-8');
      const todoLists = JSON.parse(data);
      todoLists.push(newTodo);
      await writeFile('./data/todolist.json', JSON.stringify(todoLists), 'utf-8');
      res.status(201).json({ todo: newTodo });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routing for updating todo
// PUT /edit /edit?id=def807c6-3eeb-4693-82c1-2f69bf7a9a29 body ={list dueDate,completed}
app.put('/edit', async (req, res) => {
  try {
    const { id } = req.query;
    const { list, dueDate, completed } = req.body;

    if (list === undefined || typeof list !== 'string' || list.trim() === '') {
      res.status(400).json({ message: 'list is require and must be a string' });
    } else if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
      res.status(400).json({ message: 'completed must be a boolean' });
    } else {
      const data = await readFile('./data/todolist.json', 'utf-8');
      const todoLists = JSON.parse(data);
      const index = todoLists.findIndex((item) => item.id === id);
      if (index === -1) {
        res.status(400).json({ message: 'Todo with this id is not found' });
      } else {
        todoLists[index] = { id: id, list: list, dueDate: new Date(dueDate), completed: completed };
        await writeFile('./data/todolist.json', JSON.stringify(todoLists), 'utf-8');
        res.status(201).json({ message: 'successfuly update' });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routing for deleting todo
// DELETE /delete
app.delete('/delete/:id', async (req, res) => {
  try {
    const params = req.params;
    const data = await readFile('./data/todolist.json', 'utf-8');
    const todoLists = JSON.parse(data);

    const index = todoLists.findIndex((item) => item.id === params.id);
    if (index === -1) {
      res.status(400).json({ message: 'Todo with this id is not found' });
    } else {
      todoLists.splice(index, 1);
      await writeFile('./data/todolist.json', JSON.stringify(todoLists), 'utf-8');
      //   Statuscode 204 มักใช้สำหรับ ลบข้อมูล จะไม่มีการส่ง COntent Body กับไป
      res.status(204).json({ message: 'delete success' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(8000, () => console.log('Server is running on port 8000'));
