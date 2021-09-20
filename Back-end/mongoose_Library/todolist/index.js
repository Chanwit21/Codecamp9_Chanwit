const express = require('express');
const app = express();


app.use(express.json());
app.use('/todos', todoRoute);

app.use((err, req, res, next) => [res.status(500).send({ message: err.message })]);

app.listen(8001, () => console.log('Server is running on port 8001'));