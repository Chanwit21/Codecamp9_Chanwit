// จงเขียนฟังก์ชัน inBetween(a, b) และ inArray(...arr) โดยให้ได้ผลลัพธ์ตามตัวอย่างด้านล่าง
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // expected: 3,4,5,6
console.log(arr.filter(inArray(1, 2, 10))); // expected: 1,2

function inBetween(num1,num2) {
    return (value) => value >= num1 && value <= num2;
}
function inArray(...arr) {
    return (value) => arr.includes(value);
}