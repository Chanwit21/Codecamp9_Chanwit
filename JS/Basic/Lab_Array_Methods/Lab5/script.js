// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

const clone = (arr) => {
    let result = [];
    for (let value of arr) {
        result.push(value);
    }
    return result;
}

let arry = [1,2,3,4,5,6,7,8]

console.log(clone(arry))