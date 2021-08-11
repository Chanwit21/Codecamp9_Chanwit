// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
const mul = (...arr) => {
    let result = 1;
    let arrFilter = arr.filter((value) => typeof value === 'number')
    for (let value of arrFilter) {
        if (!value || !isNaN(value)){
            result *= value;
        }
    }
    return result;
}
// วิธี reduce
const mul1 = (...arr) => {
    let arrFilter = arr.filter((value) => typeof value === 'number')
    return arrFilter.reduce((acc,crr) => acc*crr,1 );
}

console.log(mul(1,2,3,4,5))
console.log(mul1(1,2,3))
console.log(mul(1,2,3,4,5,6,"    ",8,))         
console.log(mul1(1,2,3,4,5,"dsf",7,"sfdgsdf",9))