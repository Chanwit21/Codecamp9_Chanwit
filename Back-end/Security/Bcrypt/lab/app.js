require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./route/auth');
const listRoute = require('./route/list');
const cors = require('cors');
// const { sequelize } = require('./models');

app.use(cors());
app.use(express.json());

app.use('/users', authRoute);
app.use('/lists', listRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: 'resource not found on this server' });
});

app.use((err, req, res, next) => {
  // console.log(JSON.stringify(err, null, 2));
  console.log(err);
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
});

// sequelize.sync({ force: false });

const port = process.env.PORT || 8003;

app.listen(port, () => console.log(`Server is running on port ${port}`));
