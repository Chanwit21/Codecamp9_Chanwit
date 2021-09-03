const express = require('express');
const app = express();

app.use('/images', express.static('./images'));
app.get('/', (req, res) => {
  res.redirect('/images/image.jpg');
});

app.use('/static/images', express.static('./images'));
app.get('/static/images/image.jpg', (req, res) => {
  res.redirect('/static/images/image.jpg');
});
app.listen(8080, () => console.log('Server is running on port 8080'));
