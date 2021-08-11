// IF Else
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
// let count = 1;
// let result = ''
// for(let i = 0; i < 5;i++){
//     for(let j = 0; j <= i;j++){
//         result += count + '\t';
//         count++
//     }
//     result += '\n'
// }

// console.log(result)

// function draw(start, row) {
//     let result = "";
//     for (let i = 1; i <= row; i++) {
//         for (let j = 1; j <= row; j++) {
//             if (i >= j) result += `${start++}`;
//         }
//         result += "\n"
//     }
//     console.log(result);
// }
// draw(1, 5);


// Function
// Lab 1
// function reverse(num){
//     const str = ''+num;
//     const arr = str.split('')
//     return +arr.reverse().join('')
// }

// console.log(reverse(32243))

//Lab 2
// function หรม(num1,num2) {
//     if(num1 > num2){
//         [num1,num2] = [num2,num1]
//     }
//     let check = num1
//     while(true){
//         if (num1%check === 0 && num2%check === 0){
//             break;
//         }
//         check--;
//     }
//     return check;
// }

// console.log(หรม(15,75))

// function ครน(num1,num2) {
//     if(num1 > num2){
//         [num1,num2] = [num2,num1]
//     }
//     let check = num2;
//     while(true){
//         if (check%num1 === 0 && check%num2 === 0){
//             break;
//         }
//         check++;
//     }
//     return check;
// }
// console.log(ครน(15,75))

// Lab 3
// const str = 'change my every first letter of this string to uppercase string'
// function changeFirstOfStr(str) {
//     const arrFromStr = str.split(' ')
//     const result = [];
//     for (let value of arrFromStr){
//         result.push(value.slice(0,1).toUpperCase() + value.slice(1))
//     }
//     return result.join(' ');
// }

// console.log(changeFirstOfStr(str))

// // Challenge
// //1
// function calChange(num){
//     let obj = {}
//     let arrOfCash = [500,100,50,20,10,5,1]
//     let updateNumAfter = num;
//     for(let value of arrOfCash){
//         obj[""+value] = Math.floor(updateNumAfter/value)
//         updateNumAfter -= Math.floor(updateNumAfter/value)*value;
//     }
//     return obj;
// }

// console.log(calChange(789))

//2
// function calChange2(num,...arrOfCash){
//     let obj = {}
//     let updateNumAfter = num;
//     for(let value of arrOfCash){
//         obj[""+value] = Math.floor(updateNumAfter/value)
//         updateNumAfter -= Math.floor(updateNumAfter/value)*value;
//     }
//     return obj;
// }

// console.log(calChange2(789,500,100,20,1))


//OBJECT
// function User(name,weight,height) {
//     this.name = name;
//     this.weight = weight;
//     this.height = height;
//     this.bmi = function bmi() {
//         return this.weight/(this.height/100)**2
//     }
// }

// const bomb = new User('Bomb',63,171);
// console.log(bomb);
// console.log(bomb.bmi())


let test = {
    name : "name",
    height : 171,
    weight : 63,
    calBmi : () => {
        return this
    }
}

console.log(test.calBmi())
function Admin(name,height,weight) {
    this.name = name
    this.height = height
    this.weight = weight
    this.calBmi =  () => {
        return this
    }
}
const may = new Admin('may',170,75)
console.log(may)
console.log(may.calBmi())
