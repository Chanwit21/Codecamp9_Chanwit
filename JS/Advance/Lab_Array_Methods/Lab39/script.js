// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 
let string = '31 45 12 67 34 86 23 37 19 41';
function sumStrNumber(str) {
    const arr = str.split(" ");
    const result = arr.reduce(function(accumulator,item) {
        if(item < 40 ){
            accumulator += +item;
        }
        return accumulator;
    },0)
    return result;
}

console.log(sumStrNumber(string));