// ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

const name = prompt("Enter name");
const quantity = +prompt("Enter quantity");
const value = +prompt("Enter value");
const rebate = prompt("Enter rebate");

const objectOfCargo = {
  name,
  quantity,
  value,
};
if (+rebate > 0) objectOfCargo.rebate = +rebate;

function calculateDiscount(obj) {
  let result = 1;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      if (key === "rebate") {
          result *= (100-obj[key] )/ 100;
      } else {
        result *= obj[key];
      }
    }
  }
  return result;
}

console.log(calculateDiscount(objectOfCargo));
