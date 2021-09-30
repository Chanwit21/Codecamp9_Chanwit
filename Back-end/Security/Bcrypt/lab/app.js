require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./route/auth');
const listRoute = require('./route/list');
const errorController = require('./controller/errorController');
const cors = require('cors');
// const { sequelize } = require('./models');

app.use(cors());
app.use(express.json());

app.use('/users', authRoute);
app.use('/lists', listRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: 'resource not found on this server' });
});

app.use(errorController);

// sequelize.sync({ force: false });

const port = process.env.PORT || 8003;

app.listen(port, () => console.log(`Server is running on port ${port}`));
