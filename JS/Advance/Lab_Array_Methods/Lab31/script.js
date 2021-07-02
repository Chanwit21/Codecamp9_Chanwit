// จงหาค่ามากสุดและน้อยสุดใน arr
let array = [3.24, 2.78, 3.86, 1.37, 0.52];
function sendMaxAndMin(arr) {
    const clone = [...arr];
    const sort = clone.sort(compareNumber);
    function compareNumber(a,b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }
    return `max is ${sort[clone.length - 1 ]} min is ${sort[0]}`
}
console.log(sendMaxAndMin(array));