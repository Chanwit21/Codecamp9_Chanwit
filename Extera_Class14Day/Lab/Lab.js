// //Lab 1
// const a = 10;
// const b = 16;
// if(a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// }

// const largeNum = (a>b)? a: b;
// console.log(largeNum)

// //Lab 2
// function checkSign(a,b,c) {
//     const mul = a*b*c;
//     if (mul > 0) return '+' ;
//     return '-'
// }

// const a = 3;
// const b = -7;
// const c = 2;
// const checkSign = (a*b*c > 0) ? '+': '-';
// console.log(checkSign) 

// //Lab 6
// function calGrade(name, score){
//     if(score >= 90 && score < 100){
//         return `${name} Grade A`
//     }else if(score >= 80){
//         return `${name} Grade B`
//     }else if(score >= 70){
//         return `${name} Grade C`
//     }else if(score >= 60){
//         return `${name} Grade D`
//     } else if(score < 60 && score > 0){
//         return `${name} Grade F`
//     } else {
//         return `Your Score not in range 0-100`
//     }
// }

//Lab7
// function createArr(num1,num2){
//     const arrResult = [];
//     for (let i = num1; i <= num2;i++ ){
//         arrResult.push(i);
//     }
//     return arrResult;
// }
// const arr = createArr(1,100);
// console.log(arr)

// for(let value of arr){
//     if(value % 3 === 0 && value % 5 === 0){
//         console.log('FizzBuzz',value)
//     } else if(value % 3 === 0){
//         console.log('Fizz',value)
//     } else if(value % 5 === 0){
//         console.log('Buzz',value)
//     }
// }

// //While loop
// let i = 1;
// while(i<=100){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz',i)
//     } else if(i % 3 === 0){
//         console.log('Fizz',i)
//     } else if(i % 5 === 0){
//         console.log('Buzz',i)
//     }
//     i++
// }

//For Loop 
// for(let i = 1; i < 101; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz',i)
//     } else if(i % 3 === 0){
//         console.log('Fizz',i)
//     } else if(i % 5 === 0){
//         console.log('Buzz',i)
//     }
// }

//Lab 10 
let count = 1;
let result = ''
for(let i = 0; i < 5;i++){
    for(let j = 0; j <= i;j++){
        result += count + '\t';
        count++
    }
    result += '\n'
}

console.log(result)

function draw(start, row) {
    let result = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= row; j++) {
            if (i >= j) result += `${start++}`;
        }
        result += "\n"
    }
    console.log(result);
}
draw(1, 5);
