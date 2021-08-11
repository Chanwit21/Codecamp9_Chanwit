// ให้เขียนฟังก์ชันคำนวณค่า factorial

// const factorial = (num) => {
//     let result = 1;
//     if (num === 0) {
//         return 1;
//     }
//     for (let i = 1 ; i <= num; i++){
//         result *= i ;
//     }
//     return result;
// }

//recursive
// function fac(n){
//     if(n>=1){
//         return n*fac(n-1)
//     } else {
//         return 1
//     }
// }

//เฉลย
const factorial = n => {
    let result = 1;
    for (let i = n; i > 0; i-- ) {
        result *= i;
    };
    return result;
}


//recursive
const factorial = n => {
    if(n === 1 || n === 0) return 1;
    return n*factorial(n-1);
}