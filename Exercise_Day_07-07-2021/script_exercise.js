const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Sun",
    discount: 0.2,
    type: "Cash",
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "01-01-2021",
    customer: "Tle",
    type: "Credit",
  },
  {
    id: 3,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 4,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "01-01-2021",
    customer: "Jit",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 5,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Palm",
    type: "Cash",
  },
  {
    id: 6,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Top",
    type: "Credit",
  },
  {
    id: 7,
    product: {
      id: 4,
      name: "Oppo",
      model: "A15",
      unitPrice: 4299,
    },
    saleDate: "02-01-2021",
    customer: "Sun",
    type: "Credit",
  },
  {
    id: 8,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "02-01-2021",
    customer: "Snap",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 9,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 10,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 11,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Tle",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 12,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 13,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "02-01-2021",
    customer: "Boss",
    type: "Cash",
  },
  {
    id: 14,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "02-01-2021",
    customer: "Sila",
    type: "Airpay",
  },
  {
    id: 15,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "02-01-2021",
    customer: "Top",
    type: "Cash",
  },
  {
    id: 16,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 17,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 18,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "03-01-2021",
    customer: "Sine",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 19,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "03-01-2021",
    customer: "Note",
    type: "Credit",
  },
  {
    id: 20,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "03-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 21,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 22,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 23,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "04-01-2021",
    customer: "Leo",
    type: "Cash",
  },
  {
    id: 24,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "04-01-2021",
    customer: "Game",
    type: "Cash",
  },
  {
    id: 25,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "04-01-2021",
    customer: "U",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 26,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "05-01-2021",
    customer: "Boy",
    type: "Credit",
  },
  {
    id: 27,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 28,
    product: {
      id: 12,
      name: "Vivo",
      model: "V20",
      unitPrice: 10999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 29,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "05-01-2021",
    customer: "Am",
    type: "Cash",
  },
  {
    id: 30,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "06-01-2021",
    customer: "Um",
    type: "True Wallet",
  },
  {
    id: 31,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "06-01-2021",
    customer: "Win",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 32,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "06-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 33,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Palm",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 34,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "07-01-2021",
    customer: "Dom",
    discount: 0.15,
    type: "Credit",
  },
  {
    id: 35,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "07-01-2021",
    customer: "Sern",
    type: "True Wallet",
  },
  {
    id: 36,
    product: {
      id: 13,
      name: "iPhone",
      model: "SE2000",
      unitPrice: 14900,
    },
    saleDate: "07-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 37,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Game",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 38,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Sun",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 39,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Tom",
    type: "Cash",
  },
  {
    id: 40,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "08-01-2021",
    customer: "Ham",
    type: "Cash",
  },
  {
    id: 41,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "08-01-2021",
    customer: "Dom",
    type: "Credit",
  },
  {
    id: 42,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Cin",
    type: "True Wallet",
  },
  {
    id: 43,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Tle",
    type: "Cash",
  },
  {
    id: 44,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "09-01-2021",
    customer: "U",
    type: "Cash",
  },
  {
    id: 45,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "09-01-2021",
    customer: "Am",
    discount: 0.35,
    type: "Airpay",
  },
  {
    id: 46,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "10-01-2021",
    customer: "Sern",
    type: "Cash",
  },
  {
    id: 47,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "10-01-2021",
    customer: "Game",
    discount: 0.3,
    type: "Credit",
  },
  {
    id: 48,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "10-01-2021",
    customer: "Jit",
    type: "Cash",
  },
  {
    id: 49,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "10-01-2021",
    customer: "Snap",
    type: "True Wallet",
  },
  {
    id: 50,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "10-01-2021",
    customer: "Micky",
    type: "Cash",
  },
  {
    id: 51,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "11-01-2021",
    customer: "Boss",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 52,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "11-01-2021",
    customer: "Leo",
    discount: 0.05,
    type: "Credit",
  },
  {
    id: 53,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "11-01-2021",
    customer: "Sine",
    discount: 0.15,
    type: "True Wallet",
  },
  {
    id: 54,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Um",
    discount: 0.1,
    type: "Cash",
  },
];

//1. จำนวน transaction ทั้งหมดที่ขายไปกี่รายการ (ต่อเครื่อง/ต่อ id)
//2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง และ แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
//3. ยอดขาดทั้งหมด (หลังหัก discount)
//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
//6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
//7. หายอดรวมในแต่ละวัน
//8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

//-------------------------------------------------------------------
// import { sales } from "./data.js";

//1. จำนวน transaction ทั้งหมดที่ขายไปกี่รายการ
// function countTransaction(objInArr) {
//     return objInArr.length;
// }
// console.log(countTransaction(sales));

//2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง และ แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// function cat(objInArr) {
//   const result = objInArr.reduce(
//     (accumulator, currentvalue, index) => {
//     const {
//         customer,
//         discount,
//         product:{unitPrice}
//     } = currentvalue
//         // console.log(accumulator[customer])
//       if (accumulator[customer]) {
//         //   console.log(currentvalue.discount)
//           if(currentvalue){
//             //   console.log("test")
//             accumulator[customer].sumAllPrice +=  unitPrice * (1-discount);

//             accumulator[customer].count = accumulator[customer].count+1;

//             } else {
//                 accumulator[customer].sumAllPrice +=  unitPrice;

//             accumulator[customer].count = accumulator[customer].count+1;
//             }
//           }
//           else {
//             accumulator[customer] = {
//               sumAllPrice: (discount)? currentvalue.product.unitPrice * (1-discount):unitPrice,
//               count: 1,
//             }
//             };
//         return accumulator;
//       },
//     {});
//   return result;
// }
// console.log(cat(sales));

// 3. ยอดขายทั้งหมด (หลังหัก discount)
// function sumAll(objInArr) {
//     const result = objInArr.reduce((accumulator,currentvalue) => {
//         if(currentvalue.discount){
//             // console.log(currentvalue.discount);
//             accumulator += currentvalue.product.unitPrice * (1-currentvalue.discount);
//         } else {
//             accumulator += currentvalue.product.unitPrice
//         }
//         return accumulator;
//     },0)
//     return result;
// }
// console.log(sumAll(sales));

//เฉลย
// const result3 = sales.reduce((acc, item) => {
//     const {
//       product: { unitPrice },
//       discount,
//     } = item;
//     acc += (1 - (discount || 0)) * unitPrice;
//     return acc;
//   }, 0);
//   console.log(result3);

//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// function checkStock(objInArr) {
//       const result = objInArr.reduce(
//         (accumulator, currentvalue, index) => {
//             const {
//                       product: { unitPrice,name },
//                       discount,
//                     } = currentvalue;
//             // console.log(accumulator[currentvalue.customer])
//           if (accumulator[name]) {
//             //   console.log(currentvalue.discount)
//               if(currentvalue.discount){
//                 //   console.log("test")
//                 accumulator[name].sumAllPrice +=  unitPrice * (1-discount);

//                 accumulator[name].count = accumulator[name].count+1;

//                 } else {
//                     accumulator[name].sumAllPrice +=  unitPrice;

//                 accumulator[name].count += 1;
//                 }
//               }
//               else {
//                 accumulator[name] = {
//                   sumAllPrice: (discount)? unitPrice * (1-discount):unitPrice,
//                   count: 1,
//                 }
//                 accumulator["รวมจำนวนของโปรดักต์"] += 1
//                 };
//             return accumulator;
//           },
//         {รวมจำนวนของโปรดักต์:0});
//       return result;
//     }
//     console.log(checkStock(sales));

//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// function checkStock1(objInArray) {
//   const result = objInArray.reduce((accumulator, currentvalue) => {
//     const {
//         product:{name,model,unitPrice},
//         discount,

//     } = currentvalue
//     if (accumulator[name]) {
//       if (accumulator[name][model]) {
//         accumulator[name][model]["count"] += 1;
//         accumulator[name][model]["amount"] += discount? unitPrice * (1 - discount): unitPrice;
//       } else {
//         accumulator[name][model] = {
//             count:1,
//             amount: discount? unitPrice * (1 - discount): unitPrice
//         };
//       }
//     } else {
//       accumulator[name] = {
//           [model]:{
//             count:1,
//             amount:discount? unitPrice * (1 - discount): unitPrice,
//           }
//       };
//     }
//     return accumulator;
//   }, {});
//   return result;
// }
// console.log(checkStock1(sales));

//เฉลย
// const result5 = sales.reduce((acc, item) => {
//   const {
//     product: { name, model, unitPrice },
//     discount,
//   } = item;

//   const total = (1 - discount || 1) * unitPrice;

//   if (acc[name]) {
//     if (acc[name][model]) {
//       acc[name][model] = {
//         count: acc[name][model].count + 1,
//         total: acc[name][model].total + total,
//       };
//     } else {
//       acc[name][model] = {
//         count: 1,
//         total,
//       };
//     }
//   } else {
//     acc[name] = {
//       [model]: {
//         count: 1,
//         total,
//       },
//     };
//   }

//   return acc;
// }, {});
// console.log(result5);

//6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// function classifyType(objInArray) {
//     const result = objInArray.reduce((accumulator,currentvalue,index) => {
//         const {type,discount,product:{unitPrice}} = currentvalue;
//         // console.log(type,discount,unitPrice)
//         // console.log(accumulator[type])
//         if(accumulator[type]) {
//             accumulator[type].count++;
//             accumulator[type].total += unitPrice * (1 - discount || 1);
//         } else {
//             accumulator[type] = {
//                 count:1,
//                 total: unitPrice * (1 - discount || 1)
//             };
//         };
//         return accumulator;
//     },{})
//     return result;
// }
// console.log(classifyType(sales));

//7. หายอดรวมในแต่ละวัน
// function sumPerDay(objInArray) {
//   const result = objInArray.reduce((accumulator, currentvalue, index) => {
//     const {
//       saleDate,
//       discount,
//       product: { unitPrice },
//     } = currentvalue;
//     if (accumulator[saleDate]) {
//         accumulator[saleDate].count++
//       accumulator[saleDate].amout += unitPrice * (1 - discount || 1) ;
//     } else {
//       accumulator[saleDate] = {
//           count:1,
//           amout:unitPrice * (1 - discount || 1),
//       }
//     }
//     return accumulator;
//   }, {});
//   return result;
// }
// console.log(sumPerDay(sales));

//8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
// function sortTotalPayment(objINArr) {
//   const result = objINArr.reduce((accumulator, currentvalue, index) => {
//     const {
//       discount,
//       product: { unitPrice ,model},
//     } = currentvalue;
//     if (accumulator[model]) {
//       accumulator[model] += discount
//         ? unitPrice * (1 - discount)
//         : unitPrice;
//     } else {
//       accumulator[model] = discount ? unitPrice * (1 - discount) : unitPrice;
//     }
//     return accumulator;
//   }, {});
//   let arrResult = [];
//   for(let [key,value] of Object.entries(result)){
//       let obj = {name:key,value};
//       arrResult.push(obj)
//   }
//   return arrResult.sort((a,b)=>b.value-a.value);
// }
// console.log(sortTotalPayment(sales));

// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย(อีกแบบ)
// function sortTotalPayment(objINArr) {
//   const result = objINArr.reduce((accumulator, currentvalue, index) => {
//     const {
//       discount,
//       product: { unitPrice ,model},
//     } = currentvalue;
//     let hasModel = false;
//     accumulator.forEach(element => {
//         if(element.model === model){
//             element.value += discount?unitPrice*(1-discount):unitPrice;
//             hasModel = true;
//         }
//     });
//     if(!hasModel){
//         accumulator.push({model,value:discount?unitPrice*(1-discount):unitPrice})
//     }
//     return accumulator;
//   }, []);
//   return result.sort((a,b)=>b.value-a.value);
// }
// console.log(sortTotalPayment(sales));

//ข้อ 8 อีกแบบของพี่เจียงเฉลย
// function sortTotalPayment(objINArr) {
//   let result8 = objINArr.reduce((a, c) => {
//     let key = c.product.model;
//     if (!a[key]) {
//       a[key] = [];
//       a[key].total = 0;
//       a[key].model = key;
//     }
//     a[key].total += c.product.unitPrice * (1 - (c.discount ?? 0));
//     // a[key].push(c);
//     return a;
//   }, {});
//   let xresult8 = Object.values(result8);
//   return xresult8.sort((a, b) => b.total - a.total);
// }
// console.log(sortTotalPayment(sales));

//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
// function sortCustomerPayment(objInArr) {
//   const result = objInArr.reduce((accumulator, currentvalue,index) => {
//     const {
//       customer,
//       discount,
//       product: { unitPrice },
//     } = currentvalue;
//     function checkHave(currentName) {
//         for(let i = 0; i < accumulator.length;i++ ){
//             if(currentName === accumulator[i].customer) return ({check:true,i});
//         };
//         return ({check:false,index:"none"});
//     }
//     const {check,i} = checkHave(customer)
//     if (check){
//         accumulator[i].count++
//         accumulator[i].value += (discount?unitPrice*(1-discount):unitPrice)
//     } else {
//         accumulator.push({customer,value:(discount?unitPrice*(1-discount):unitPrice),count:1})
//     }
//     return accumulator;
//   }, []);
//   return result.sort((a,b)=>b.value-a.value);
// }
// console.log(sortCustomerPayment(sales));

//ข้อ 9 อีกแบบของพี่เจียงเฉลย
// function sortTotalPayment(objINArr) {
//     return Object.values(objINArr.reduce( (a,c) => {
//         let key = c.customer;
//         if(!a[key]){
//             a[key] = {};
//             a[key].total = 0;
//             a[key].customer = key;
//         }
//         a[key].total += c.product.unitPrice*(1-(c.discount ?? 0))     //?? คือมี discount ไหม่ถ้าไม่มีจะให้เป็น0 แทน
//         return a
//     },{})).sort((a,b) => b.total-a.total);
//   }
//   console.log(sortTotalPayment(sales));

// let result9 = sales.reduce((a, c) => {
//   let key = c.customer;
//   if (!a[key]) {
//     a[key] = [];
//     a[key].total = 0;
//     a[key].customer = key;
//   }
//   a[key].total += c.product.unitPrice * (1 - (c.discount ?? 0));
//   return a;
// }, {});
// let xresult9 = Object.values(result9);
// console.log(xresult9);
// xresult9.sort((a, b) => b.total - a.total);
// console.log(xresult9);

