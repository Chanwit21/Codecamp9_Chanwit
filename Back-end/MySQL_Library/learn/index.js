const express = require('express');
const app = express();
const todoRoute = require('./route/todo');

// const mysql = require('mysql2/promise');
// const conPromise = mysql.createConnection({
//   host: 'localhost',
//   user: 'cc9',
//   password: 'root-bomb-cc9',
//   database: 'todo_mysql',
// });

// conPromise
//   .then((connection) => {
//     console.log('Connect to DB successfully');
//     // const resultPromise = connection.query('INSERT INTO `lists` (title,due_date) VALUES ("Meet a doctor",
//     //   "2021-11-30")');
//     const resultPromise = connection.query('SELECT * FROM `lists`'); // [rows,fields]
//     return resultPromise;
//   })
//   .then(([rows, fields]) => console.log(rows))
//   .catch((err) => console.log(err));

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'cc9', // mysql username
//   password: 'root-bomb-cc9', // mysql password
//   database: 'todo_mysql', // database name
//   connectionLimit: 100, // default: 10
// });

// pool.query('SELECT * FROM `lists`').then(([rows]) => {
//   // rows contains rows returned by server
//   console.log(rows);
// });

// pool
//   .execute('INSERT INTO lists (title, completed, due_date) VALUES (?,?,?)', ['Meeting Group Project', 1,new Date('2021-09-23')])
//   .then((result) => console.log(result[0]))
//   .catch((err) => console.log(err));

// pool
//   .execute('SELECT * FROM `lists` WHERE id=(?)', [5])
//   .then((result) => console.log(result[0]))
//   .catch((err) => console.log(err));

app.use(express.json());
app.use('/todos', todoRoute);

app.use((err, req, res, next) => [res.status(500).send({ message: err.message })]);

app.listen(8001, () => console.log('Server is running on port 8001'));
