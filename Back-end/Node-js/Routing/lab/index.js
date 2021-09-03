const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h2>My First Web App using Express</h2>');
  //   res.status(200).json({ title: 'My First Web App', message: 'Our Web App API' });
});

app.get('/todos', (req, res) => {
  res.status(200).json({ message: 'GET todos' });
});

app.post('/todos', (req, res) => {
  res.status(200).json({ message: 'POST todos' });
});

app.put('/todos', (req, res) => {
  res.status(200).json({ message: 'PUT todos' });
});

app.delete('/todos', (req, res) => {
  res.status(200).json({ message: 'DELETE todos' });
});

app.get('/redirect', (req, res) => {
  res.redirect('https://google.com');
});

app.get('/404', (req, res) => {
  res.status(404).send('<h1>This Page is not Found</h1>');
});

app.listen(9999, () => console.log('Server is running in port 9999'));
