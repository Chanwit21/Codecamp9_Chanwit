const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   req.test = 'TEstTest';
//   next();
// });
// app.use((req, res, next) => {
//   console.log('Middleware 2');
// });

// app.use((req, res, next) => {
//   const { payee, amount } = req.body;

//   if (!amount) {
//     res.status(400).json({ message: 'Payee is require' });
//   } else if (!amount || isNaN(amount) || amount < 0) {
//     res.status(400).json({ message: 'Inalid amount' });
//   } else {
//     next();
//   }
// });

// app.post('/transactions', (req, res) => {});

// app.put('/transactions', (req, res) => {});

// // ถ้าไม่มีรีเควสก็จะไม่ทำ
// app.use((req, res, next) => {
//   console.log(req.user);
//   req.user = { id: 1, name: 'Chanwit', email: 'bom.suthi@gmail.com' };
//   req.role = 'Admin';
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.user);
//   res.send('end');
// });

// app.get('users/profile',(req,res,next)=>{})
// app.get('users/birthInfo',(req,res,next)=>{})
// app.post('users/create',(req,res,next)=>{})
// app.put('users/change-password',(req,res,next)=>{})
// app.patch('users/disable',(req,res,next)=>{})
// app.delete('users/delete',(req,res,next)=>{})

router.get('/profile', (req, res, next) => {}); // GET /users/profile
router.post('/create', (req, res, next) => {}); // POST /users/create

app.use('users', router);
app.use(
  '/booking',
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {}
);

const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
  throw new Error('Throw error from GET path:/product');
});
productRouter.post('/', (req, res, next) => {
  try {
    // connected to database
    // asynchronous operation
  } catch (err) {
    //   ถ้าใน next มี argrument หรือ paramiterมันจะกระโดดเข้าไปทำใน error middle ware เลย โดยค่าที่ส่งไปใน next     error midle ware จะคิดว่า เป็นตัว err ที่ส่งไปเลย
    next(err);
  }
});
productRouter.put('/', (req, res, next) => {});
productRouter.delete('/', (req, res, next) => {});

app.use('/product', productRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(8080, () => console.log('Server is running on port 8080'));
