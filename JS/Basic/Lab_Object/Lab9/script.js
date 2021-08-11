// ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

//ทุกอย่าควร Validate เพื่อป้องกันการเกิด Error  ในโปรแกรม
// const name = prompt('Enter Product Name');
// const amout = prompt('Enter Product Amout');
// const price = prompt('Enter Product Price');
// const discount = prompt('Enter Product discount');

// const objectOfCargo = {
//   name,
//   amout,
//   price,
// };
// if (+discount > 0) objectOfCargo.discount = +discount;

// function calculateDiscount(obj) {
//   let result = 1;
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       if (key === "discount") {
//           result *= (100-obj[key] )/ 100;
//       } else {
//         result *= obj[key];
//       }
//     }
//   }
//   return result;
// }

// console.log(calculateDiscount(objectOfCargo));


//เฉลย
const name = prompt('Enter Product Name');
const amout = prompt('Enter Product Amout');
const price = prompt('Enter Product Price');
const discount = prompt('Enter Product discount');

const product = {
  name,
  amout,
  price,
};
if (+discount > 0) product.discount = +discount;

function calNetPrice(obj) {
  return obj.price*obj.amout * (100-obj.discount || 0)/100
}

//เขียน Func อีกแบบ
// function calNetPrice(obj) {
//   if (obj.discount) {
//     return obj.price*obj.amout * (100-obj.discount)/100
//   }
//   return obj.price*obj.amout
// }

console.log(calNetPrice(product));