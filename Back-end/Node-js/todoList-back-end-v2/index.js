const express = require('express');
const app = express();
const todoRoute = require('./route/todoRoute');

app.use(express.json());

app.use('/todos', todoRoute);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(8000, () => console.log('Server is running on port 8000'));
