const express = require('express');
const app = express();
const todoRoute = require('./route/todoRoute');

app.use(express.json());

app.use('/todos', todoRoute);

app.listen(8000, () => console.log('Server is running on port 8000'));
