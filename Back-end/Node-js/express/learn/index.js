const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('<h1>Hello my first express web app</h1>');
});

app.listen(3000, () => console.log('Server running in port 300'));
