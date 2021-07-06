// ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย
// max ให้ return ค่ามากสุดของตัวเลขใน Array
// sum ให้ return ผลรวมของตัวเลขใน Array

// Array.prototype.max = function () {
//     let result = 0;
//     for (let [index,value] of Object.entries(this)) {
//         if(index === "0"){
//             result = value;
//         }
//         if (value > result) {
//             result = value;
//         }
//     };
//     return result;
// };

//อีกแบบ
Array.prototype.max = function () {
    return this.reduce((accumulator,currentvalue,index) => {
        if (index === 0) return currentvalue;
        if (currentvalue > accumulator) return currentvalue;
        return accumulator;
    },0);
};
console.log([1,2,3,4,500,6,7,8,9,10,100].max())
console.log([10,20,30,40,52,45,354,4,513,].max())
