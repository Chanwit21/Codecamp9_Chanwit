// จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// netPrice = price x 1-discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];
const summary = [];
let length = 0;

//แบบยาวๆ
// for (let key in sales) {
//     let result = {};
//     if (sales[key].discount) {
//         result["netPrice"] = sales[key].price*(1-sales[key].discount)
//     } else {
//         result["netPrice"] = sales[key].price
//     }
//     summary[length] = result;
//     length++
// }

//แบบสั้น
for (let key in sales) {
    let result = {};
    result["netPrice"] = (sales[key].discount)? sales[key].price*(1-sales[key].discount) : sales[key].price;
    summary[length] = result;
    length++;
}

console.log(summary)
