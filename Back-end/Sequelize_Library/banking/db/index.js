const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'cc9',
  password: 'root-bomb-cc9',
  database: 'demo_banking',
  dialect: 'mysql',
});

// // Check Connection
// sequelize
//   .authenticate()
//   .then(() => console.log('DB connected!'))
//   .catch((err) => console.log('unable to connect:', err));

// const Account = require('./Account')(sequelize, DataTypes);
// const Customer = require('./Customer')(sequelize, DataTypes);
// const Transfer = require('./Transfer')(sequelize, DataTypes);
// const Branch = require('./Branch')(sequelize, DataTypes);
const db = {};
db.Account = require('./Account')(sequelize, DataTypes);
db.Customer = require('./Customer')(sequelize, DataTypes);
db.Transfer = require('./Transfer')(sequelize, DataTypes);
db.Branch = require('./Branch')(sequelize, DataTypes);

// // Association
// db.Customer.associate(db);
// db.Branch.associate(db);
// db.Account.associate(db);
// db.Transfer.associate(db);

for (let model of Object.keys(db)) {
  if (db[model].associate(db)) db[model].associate(db);
}

// const Branch = sequelize.define(
//   'Branch',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   { tableName: 'branches', underscored: true }
// );

// const createCustomerModel = require('./Customer');
// const Customer = createCustomerModel(sequelize, DataTypes);
// เขียนบรรทัดเดียวได้แต่นิยมเขียนสองบรรทัดมากกว่าเพราะมันอ่านง่าย

// const Customer = sequelize.define(
//   'Customer',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gender: {
//       type: DataTypes.ENUM('MALE', 'FEMALE'),
//       allowNull: true,
//     },
//     birthDate: {
//       type: DataTypes.DATEONLY,
//       allowNull: true,
//     },
//     address: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//   },
//   { tableName: 'customers', underscored: true }
// );

// const Account = sequelize.define(
//   'Account',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//     },
//     openDate: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     closeDate: {
//       type: DataTypes.DATEONLY,
//       allowNull: true,
//     },
//     balance: {
//       type: DataTypes.DECIMAL(15, 2),
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//   },
//   { tableName: 'accounts', underscored: true }
// );

// const Transfer = sequelize.define(
//   'Transafer',
//   {
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     amount: {
//       type: DataTypes.DECIMAL(15, 2),
//       allowNull: false,
//     },
//   },
//   {
//     underscored: true,
//   }
// );

// // Association
// Customer.hasMany(Account, {
//   foreignKey: {
//     name: 'customerId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// }); // หา fk โดยเอาชื่อ table แบบ singular คือ ตัด s ออกไป แล้วตามด้วย _id (customer_id) (underscore is true)
// Account.belongsTo(Customer, {
//   foreignKey: {
//     name: 'customerId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// }); // fk ต้องอยู่ในตารางของตัวที่เป็น belongTo fk อยู่ที่ table account

// Branch.hasMany(Account, {
//   foreignKey: {
//     name: 'branchId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// });
// Account.belongsTo(Branch, {
//   foreignKey: {
//     name: 'branchId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// });

// // *** Many:Many
// // A.belongsToMany(B, { through: C });
// // B.belongsToMany(A, { through: C });
// Customer.belongsToMany(Branch, {
//   through: 'accounts',
//   foreignKey: { name: 'customerId' },
//   otherKey: { name: 'branchId' },
// });
// Branch.belongsToMany(Customer, {
//   through: 'accounts',
//   foreignKey: { name: 'branchId' },
//   otherKey: { name: 'customerId' },
// });

//as ใช้กรณี self Join
// ความสัมพันธ์แบบ TransferIn
// Account.hasMany(Transfer, {
//   as: 'TransferTos',
//   foreignKey: {
//     name: 'toAccountId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// });
// Transfer.belongsTo(Account, {
//   as: 'ToAccount',
//   foreignKey: {
//     name: 'toAccountId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// });
// ความสัมพันธ์แบบ TransferOut
// Account.hasMany(Transfer, {
//   as: 'TransferFroms',
//   foreignKey: {
//     name: 'fromAccountId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// });
// Transfer.belongsTo(Account, {
//   as: 'FromAccount',
//   foreignKey: {
//     name: 'fromAccountId',
//     allowNull: false,
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT',
// });

// sequelize.sync({ force: false });

module.exports = db;
