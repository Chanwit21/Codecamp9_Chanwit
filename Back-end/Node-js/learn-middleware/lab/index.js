const express = require('express');
const app = express();
const todoRoutes = require('./route/todo');
const dogRoutes = require('./route/dog');
const cors = require('cors');

app.use(cors());
// // Lab2
// app.use('/todos', todoRoutes);

// // Lab1
// app.use((req, res) => {
//   res.status(404).send({ message: 'Path not found in this page' });
// });

// Lab3
app.use('/dog', dogRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(8888, () => console.log('Server is running on port 8080'));
