const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('<h1>TodoList Web app</h1>');
});

app.listen(8000, () => {
  console.log('Server Running on port 8000');
});
