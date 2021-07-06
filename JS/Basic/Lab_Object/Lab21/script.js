// ให้สร้าง Constructor Function: Accumulator(startingValue) มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง) และมี method 
// read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// show() ให้ alert ค่า currentValue

// function AccumulatorString(startingValue) {
//     //this = {}; behind the scene
//     this.currentValue = startingValue;
//     this.read = function() {
//         let str = prompt("Input Text")
//         return this.currentValue += " " + str;
//     }
//     this.show = function() {
//         return alert(this.currentValue);
//     }
//     //return this behind the scene
// }

function AccumulatorNumber(startingValue) {
    this.currentValue = startingValue;
    this.read = function() {
        let num = prompt("Input Number")
        return this.currentValue += +num;
    }
    this.show = function() {
        return alert(this.currentValue);
    }
}

let test = new AccumulatorNumber(0)
//test object from new AccumulatorNumber(0)
// {
//     currentValue : 0,
//     read: function () {
//         let num = prompt("Input Number")
//         return this.currentValue += +num;
//     },
//     show : function() {
//         return alert(this.currentValue);
//     }

// }

console.log(test.read());
console.log(test.read());
console.log(test.read());
console.log(test.show());