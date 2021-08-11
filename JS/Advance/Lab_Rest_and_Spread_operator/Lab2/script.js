// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
const filterOutOdds = (...arr) => {
    return arr.filter(value => value % 2 === 0 );
}
console.log(filterOutOdds(1,2,3,4,5))
console.log(filterOutOdds(1,2,3,4,5,6,7,))
console.log(filterOutOdds(1,2,3,4,5,6,7,8,9,10))
console.log(filterOutOdds(1,2,3,4,5,6,7,8,9,10,11,12,13))