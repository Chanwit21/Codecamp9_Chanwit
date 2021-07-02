// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก
const arr = [-3, 2, 0, -7, 4, 6];

const before = arr.map((item) => item**2);
const result = before.sort(compare)
function compare(a,b) {
    if (a > b ) return 1;
    if (a === b ) return 0;
    if (a < b ) return -1;
}
console.log(result);