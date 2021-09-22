const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/todo_mongoose';
// const MONGODB_URI =
//   'mongodb+srv://cc9:root-bomb-cc9@cluster0.wdniu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfily connected to database');
    })
    .catch((err) => {
      console.log('Error connecting to database');
      console.error(err);
      process.exit(1);
    });
};
