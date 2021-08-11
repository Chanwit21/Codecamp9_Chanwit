console.log("ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี")
console.log("หาผลรวมตั้งแต่ 1 ถึง 100")
console.log("หาผลรวมของเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี")
console.log("หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 ")


let sumAll = 0;
let sumEven = 0;
let sumOdd = 0;
let sumMod3Sup = 0;
let sumMod2Sup = 0;
let sumFinal = 0;

for (let i = 1; i < 101; i++) {
    sumAll += i;
    
    if (i%2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    };

    if (i%3 === 0) {
        sumMod3Sup += i**2;
    };

    if (i%2 === 0) {
        sumMod2Sup += i**2;
    };

};

//อีกแบบ
// for (let i = 1; i < 101; i++) {
//     sumAll += i;

//     if (i%2 === 0) {
//         sumEven += i;
//         if(i%3 !== 0 ) {
//             sumFinal += i**2;
//         }
//     } else {
//         sumOdd += i;
//     };

//     if (i%3 === 0 && i%6 !== 0){
//         sumFinal -= i**2;
//     };
// };

console.log(sumMod2Sup);
console.log(sumMod3Sup);
console.log(`ผลบวกจำนวนเต็มตั้งแต่ 1 - 100 คือ ${sumAll}`);
console.log(`ผลบวกจำนวนเต็มที่เป็นเลขคู่ตั้งแต่ 1 - 100 คือ ${sumEven}`);
console.log(`ผลบวกจำนวนเต็มที่เป็นเลขคี่ตั้งแต่ 1 - 100 คือ ${sumOdd}`);
console.log(`ผลบวกจำนวนเต็มของเลขที่หาร 2 ลงตัว ยกกำลังสอง ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 ตั้งแต่ 1 - 100 คือ ${sumMod2Sup - sumMod3Sup }`);
// console.log(`ผลบวกจำนวนเต็มของเลขที่หาร 2 ลงตัว ยกกำลังสอง ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 ตั้งแต่ 1 - 100 (sumFinal) คือ ${sumFinal}`);