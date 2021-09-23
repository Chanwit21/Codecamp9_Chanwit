const express = require('express');
const app = express();
const { sequelize } = require('./models');
const customerRoute = require('./route/Customer');
const branchRoute = require('./route/Branch');
const accountRoute = require('./route/Account');
const totalbalanceRoute = require('./route/TotalBalance');

app.use(express.json());

// ใช้กรณีที่อยากฝากไฟล์ไว้ที่ Public
app.use(express.static('/public'));

app.use('/customers', customerRoute);
app.use('/branches', branchRoute);
app.use('/accounts', accountRoute);
app.use('/totalbalance', totalbalanceRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: 'this resource is not found' });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(8088, () => console.log('Server is running on port 8088'));
