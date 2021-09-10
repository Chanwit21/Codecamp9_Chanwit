const express = require('express');
const app = express();
const cors = require('cors');
const todoRoutes = require('./route/todo');
const errorMidleWare = require('./errorMIdleWare');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRoutes);

app.use(errorMidleWare);

app.listen(8989, () => console.log('Server is running on port 8989'));
