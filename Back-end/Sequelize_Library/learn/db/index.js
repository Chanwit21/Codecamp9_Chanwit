const { Sequelize, DataTypes, Model } = require('sequelize');
// const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4());

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'cc9',
  password: 'root-bomb-cc9',
  database: 'todo_seq',
  dialect: 'mysql',
});

// Check Connection
// sequelize
//   .authenticate()
//   .then(() => console.log('DB connected!'))
//   .catch((err) => console.log('unable to connect:', err));

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: 'users', //ตั้งชื่อให้ตาราง
    // timestamps: false, //ตัด timestamp createAt updateAt
    underscored: true, //ทำให้ชื่อทุก field เป็น snakeCase
  }
);

const List = sequelize.define(
  'List',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // short Hand กรณีที่มี type อย่างเดียว
    dueDate: DataTypes.DATEONLY,
    // dueDate: {
    //   type: DataTypes.DATEONLY,
    // },
  },
  {
    tableName: 'lists',
    // timestamps: false,
    underscored: true,
  }
);

User.hasMany(List);
// Default ของ Belongto จะกำหนดเป็น Optional
List.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    type: DataTypes.UUID,
    allowNull: false,
  },
});

// User.findOne({ where: { id: '8223e678-6477-4a4c-95ce-10fc7104c903' } })
//   .then((result) => console.log(JSON.stringify(result, null, 2)))
//   .catch((err) => console.log(err));

// พยายามปิดเมื่อสร้าง Table เสร็จแล้ว
// sequelize.sync({ force: true });

// const Account = sequelize.define(
//   'Account',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//       field: 'ACCOUNT_ID',
//     },
//     availBalance: {
//       type: DataTypes.FLOAT,
//       defaultValue:null,
//       field:"AVAIL_BALANCE"
//     },
//   },
//   { tableName: 'account' }
// );

module.exports = { User, List, sequelize };
