const { Op } = require('sequelize');
const { List, User, sequelize } = require('./db');

//Methode 1 instance INSERT ROW USING INSTANC ,UPDATE ROW USING INSTANCE
// const objUser = new User(); //not recommend
//use this

// Create
// Build is Static Methode (เรียกใช้ Methode จากชื่อ Class โดยตรง เรียกว่า Static Methode)
// const user = User.build({
//   firstName: 'Chanwit',
//   lastName: 'Pansila',
//   email: 'bom.suthi@gmail.com',
// });

// methode to insert to database
// user.save(); //save is instance methode (เรียกใช้ Methode จาก Instance หรือ Object เรียกว่า instance Methode )

//  Update
// const update = async () => {
//   const user = await User.findOne({ where: { id: '9105fa15-23a9-433a-ad1c-1a667f9ddb39' } });
//   user.email = 'joe@gmail.com';
//   user.firstName = 'Joe';
//   user.save();
//   console.log(user.toJSON());
// };
// update();

// DELETE
// const del = async () => {
//   const user = await User.findOne({ where: { id: '9105fa15-23a9-433a-ad1c-1a667f9ddb39' } });
//   console.log(user.toJSON());
//   user.destroy();
// };
// del();

// ***** Using Static Methode ****
// INSERT ROW using create methode
// const staticCreate = async () => {
//   const newUser = await User.create({
//     firstName: 'Chanwit',
//     lastName: 'Pansila',
//     email: 'bom.suthi@gmail.com',
//   });
//   console.log(newUser.toJSON());
// };
// staticCreate();

// INSERT ROW using update methode
// const staticUpdate = async () => {
//   const result = await User.update(
//     {
//       firstName: 'bomb',
//       email: 'bomb@gmail.com',
//     },
//     { where: { id: '407033fd-2a5d-46fb-af2b-5dac4ca85a63' } }
//   );
//   console.log(result);
// };
// staticUpdate();

// INSERT ROW using deatroy methode
// const staticDelete = async () => {
//   const result = await User.destroy({ where: { id: '407033fd-2a5d-46fb-af2b-5dac4ca85a63' } });
//   console.log(result);
// };
// staticDelete();

// Create Multiple record
// User.bulkCreate([
//   { email: 'jack@gmail.com', firstName: 'Jack', lastName: 'Sparrow' },
//   { email: 'davy@gmail.com', firstName: 'Davy', lastName: 'Jones' },
//   { email: 'elizabeth@gmail.com', firstName: 'Elizabeth', lastName: 'Swan' },
//   { email: 'will@gmail.com', firstName: 'Will', lastName: 'Turnor' },
//   { email: 'captain@gmail.com', firstName: 'Captain', lastName: 'Barbosa' },
// ]);

// ***** SELECT QUERY **** //
const run = async () => {
  //   //SELECT ALL
  //   const result = await User.findAll();
  //   console.log(JSON.stringify(result, null, 2));
  // SELECT some colum using attribute (เลือกแค่บางคอลั่ม)
  //   const result = await User.findAll({
  //     attributes: ['email', 'firstName', ['created_at', 'createTime']], //เปลี่ยนชื่อ created_at เป็น createdTime
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //exclude some field
  //   const result = await User.findAll({
  //     // attributes: ['email', 'firstName','lastName','createdAt','updatedAt'],
  //     attributes: { exclude: ['id'] }, //exclude คือ ไม่ต้องเอาอะไรมา
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  // SELECT WHERE Clase
  //   const result = await User.findAll({
  //     // WHERE id = '5599d13b-ce34-4857-979f-f3a274fb2e52' AND firstName = 'Will'
  //     where: {
  //       id: '5599d13b-ce34-4857-979f-f3a274fb2e52',
  //       firstName: 'Will',
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //   //USING OR In WHERE
  //   const result = await User.findAll({
  //     where: {
  //       [Op.or]: [{ id: '5599d13b-ce34-4857-979f-f3a274fb2e52' }, { id: '9435324d-00b8-4a88-a113-9f1b45c6903b' }],
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //   USING OP LIKE Startwith
  //   const result = await User.findAll({
  //     attributes: ['firstName', 'lastName', 'email'],
  //     where: {
  //       [Op.or]: [
  //         {
  //           firstName: {
  //             [Op.startsWith]: 'w',
  //           },
  //         },
  //         {
  //           lastName: {
  //             // [Op.like]: 'S%',
  //             [Op.startsWith]: 's',
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //   // id = 5 or id =6 or id = 7 or id  = 8
  // Using OR
  //   const result = await User.findAll({
  //     where: {
  //       [Op.or]: [{ id: 4 }, { id: 6 }, { id: 7 }, { id: 8 }],
  //     },
  //   });
  //Using In
  //   const result = await User.findAll({
  //     attributes: ['firstName', 'lastName', 'email'],
  //     where: {
  // Short Hand Op.in
  //       id: [4, 6, 7, 8],
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  // id>= 5
  //   const result = await User.findAll({
  //     attributes: ['firstName', 'lastName', 'email'],
  //     where: {
  //       id: {
  //         [Op.gte]: 5,
  //       },
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //  id < 4 or id >=8
  //   const result = await User.findAll({
  //     attributes: ['firstName', 'lastName', 'email'],
  //     where: {
  //       [Op.or]: [
  //         {
  //           id: {
  //             [Op.lt]: 4,
  //           },
  //         },
  //         {
  //           id: {
  //             [Op.gte]: 8,
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  // id between 4 and 8
  //   const result = await User.findAll({
  //     attributes: ['firstName', 'lastName', 'email'],
  //     where: {
  //       id: {
  //         [Op.between]: [4, 8],
  //       },
  //     },
  //   });
  //   console.log(JSON.stringify(result, null, 2));
};
run();

// log sequelize Object
// console.log(user);
// console.log(user.toJSON());
// console.log(JSON.stringify(user, null, 2));
// console.log(JSON.parse(JSON.stringify(user)));
