const fs = require('fs');
const axios = require('axios');
const uuidv4 = require('uuid');
const flieService = require('./fileService');
const CustomError = require('./customError');

// const MOCK = [
//   {
//     id: 1,
//     first_name: 'Hedy',
//     last_name: 'Cardow',
//     email: 'hcardow0@fotki.com',
//     gender: 'Polygender',
//     ip_address: '120.161.50.194',
//   },
//   {
//     id: 2,
//     first_name: 'Ronna',
//     last_name: 'Krolman',
//     email: 'rkrolman1@altervista.org',
//     gender: 'Non-binary',
//     ip_address: '210.241.199.160',
//   },
//   {
//     id: 3,
//     first_name: 'Rob',
//     last_name: 'Riep',
//     email: 'rriep2@blogspot.com',
//     gender: 'Genderqueer',
//     ip_address: '116.166.86.159',
//   },
//   {
//     id: 4,
//     first_name: 'Wrennie',
//     last_name: 'Losemann',
//     email: 'wlosemann3@umn.edu',
//     gender: 'Genderqueer',
//     ip_address: '142.172.83.123',
//   },
// ];

// flieService
//   .readFileJSON('data.json')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// flieService
//   .writeFileJSON('test.json', MOCK)
//   .then(() => console.log('writefile success'))
//   .catch((err) => console.log(err));

const instance = new CustomError('No........', 400);
console.log(instance.message);
console.log(instance.statusCode);
