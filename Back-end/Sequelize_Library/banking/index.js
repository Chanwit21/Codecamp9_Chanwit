const { Customer, Branch, Account, Transfer, sequelize } = require('./db');
const { Op, Sequelize, QueryTypes } = require('sequelize');

const run = async () => {
  //   const result = await Customer.findAll();
  //   const result = await Branch.findAll();
  //   const result = await Account.findAll();
  // Order firstName ASC
  //   const result = await Customer.findAll({
  //     order: ['firstName', 'lastName'],
  //   });
  // Order firstName DESC
  //   const result = await Customer.findAll({
  //     order: [['firstName', 'DESC']],
  //   });
  // Order Branch name DESC
  //   const result = await Branch.findAll({
  //     order: [['name', 'DESC']],
  //   });
  // Order Account balance DESC balance > 5000
  //   const result = await Account.findAll({
  //     order: [['balance', 'DESC']],
  //     where: {
  //       balance: {
  //         [Op.gt]: 5000,
  //       },
  //     },
  //   });
  // **** Group by **** //
  // Raw SQL SELECT gender ,COUNT(gender) FROM `customers` GROUP BY gender
  //Sequelize
  //   With findAll function
  //   const result = await Customer.findAll({
  //     group: ['gender'],
  //     attributes: ['gender', [Sequelize.fn('COUNT', Sequelize.col('gender')), 'count']],
  //     // order: [Sequelize.fn('COUNT', Sequelize.col('gender'))],
  //     order: [Sequelize.literal('count')],
  //   });
  //   With count function Order ไม่ได้
  //   const result = await Customer.count({
  //     order: [Sequelize.literal('count')],
  //     group: ['gender'],
  //     attributes: ['gender', 'count'],
  //   });
  // หา total balance ของแต่ละ customer_id
  //   const result = await Account.findAll({
  //     group: ['customer_id'],
  //     attributes: ['customer_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total_balance']],
  //   });
  // หา total balance ของแต่ละ branch_id
  //   const result = await Account.findAll({
  //     group: 'branch_id',
  //     attributes: ['branch_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'sum_balance']],
  //   });
  // หา total balance ของแต่ละ customer_id และ branch_id
  //   const result = await Account.findAll({
  //     group: ['branch_id', 'customer_id'],
  //     attributes: ['branch_id', 'customer_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'sum_balance']],
  //     order: [Sequelize.literal('branch_id')],
  //   });
  // **** LIMIT OFFSET ****//
  //   const result = await Account.findAll({
  //     limit: 5,
  //     offset: 10,
  //   });
  // ** Association
  //   const result = await Customer.findOne({
  //     where: {
  //       id: 1,
  //     },
  //     include: Account,
  //   });
  // const result = await Account.findAll({
  //   where: {
  //     id: 1,
  //   },
  //   attributes: { exclude: ['createdAt', 'updatedAt'] },
  //   // short hand includes
  //   // include: Customer,
  //   // Full includes
  //   include: {
  //     model: Customer,
  //     attributes: { exclude: ['createdAt', 'updatedAt'] },
  //   },
  // });
  // *** many to many ***
  // const result = await Branch.findAll({
  //   where: { id: 1 },
  //   // include:Account,
  //   include: {
  //     model: Account,
  //     include: Customer,
  //   },
  // });
  // include multiple model
  // const result = await Customer.findAll({
  //   where: { id: 1 },
  //   include: [Account, Branch],
  // });
  // filter nested Model
  // // Methode 1
  // const result = await Customer.findAll({
  //   where: { id: 1 },
  //   include: [
  //     {
  //       model: Account,
  //       where: {
  //         balance: {
  //           [Op.lt]: 10000,
  //         },
  //       },
  //     },
  //     Branch,
  //   ],
  // });
  // Methode 2 where in top level
  // const result = await Customer.findAll({
  //   where: {
  //     id: 1,
  //     '$Accounts.balance$': {
  //       [Op.lt]: 10000,
  //     },
  //   },
  //   include: [Account, Branch],
  // });
  // ให้เขียนเลือกเฉพาะ id,firstName,lastName ของ customer,balance ของ Account ,name ของ branch
  // const result = await Customer.findAll({
  //   include: [{ model: Account, attributes: ['balance'], include: { model: Branch, attributes: ['name'] } }],
  //   order: [[Account, 'balance']],
  //   attributes: ['id', 'firstName', 'lastName'],
  // });
  // ให้เขียนเลือกบันชีที่มี balance มากกว่า 10000 โดยให้ดึงชื่อสาขาชื่อลูกค้า และมีเงื่อนไขว่ามีตัว t อยู่ในชื่อของลูกค้า และให้เรียง balance จากมากไปน้อย
  // const result = await Account.findAll({
  //   where: {
  //     '$Customer.first_name$': {
  //       [Op.like]: '%t%',
  //     },
  //     balance: {
  //       [Op.gt]: 10000,
  //     },
  //   },
  //   order: [['balance', 'DESC']],
  //   include: [
  //     {
  //       model: Customer,
  //       attributes: ['firstName'],
  //     },
  //     {
  //       model: Branch,
  //       attributes: ['name'],
  //     },
  //   ],
  // });

  // //Transfer
  // const result = await Transfer.findAll({
  //   include: [
  //     { model: Account, as: 'ToAccount', attributes: ['id', 'balance'] },
  //     { model: Account, as: 'FromAccount', attributes: ['id', 'balance'] },
  //   ],
  // });
  // console.log(JSON.stringify(result, null, 2));

  const sql =
    'SELECT c.first_name AS firstName,SUM(a.balance) AS total FROM accounts a LEFT JOIN customers c ON a.customer_id = c.id GROUP BY c.id';
  const arrResult = await sequelize.query(sql, { type: QueryTypes.SELECT });
  console.log(JSON.stringify(arrResult, null, 2));
};
run();
