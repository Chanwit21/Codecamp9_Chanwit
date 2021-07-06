// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let array = [john, jo, jin];

function getAverageAge(arr) {
    const result = arr.reduce(function(accumulator,item) {
        accumulator += item.age;
        return accumulator;
        ;
    },0)
    return result/arr.length;
}

console.log(getAverageAge(array)); // (27 + 21 + 25) / 3 = 24.33