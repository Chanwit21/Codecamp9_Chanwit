require('./config/database').connect();

const express = require('express');
const todoRoute = require('./route/todo');
const app = express();

app.use(express.json());
app.use('/todos', todoRoute);

app.use((err, req, res, next) => {
  // console.log(err);

  // Chack Invalid Id
  if (err.valueType && err.valueType === 'string' && err.kind === 'ObjectId') {
    res.status(400).json({ message: 'Id is invalid' });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(8001, () => console.log('Server is running on port 8001'));
