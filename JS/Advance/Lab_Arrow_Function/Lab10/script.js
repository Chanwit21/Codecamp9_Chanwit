console.log("ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)")
console.log("ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020")

// const checkLeapYear = (year) => {
//     if (year%100 === 0) {
//         if (year%400 === 0) {
//             return true;
//         }
//     }else if (year%4 === 0 ){
//         return true;
//     } else {
//         return false;
//     }
// }

// const countAgeInDay = (year) => {
//     let result = 0;
//     for (let i = year; i <= 2020; i++){
//         if (checkLeapYear(i)){
//             result += 366;
//         } else {
//             result += 365;
//         }
//     }
//     return result;
// }

//เฉลย
const isLeapYear = year => {
    if (year % 100 === 0) return (year % 400 === 0) 
    return year % 4 === 0 ;
}

const calAge = (birthYear) => {
    let day = 0;
    for (let i = birthYear; i <= 2020; i++){
        day += isLeapYear(i) ? 366:365;
    }
    return day;
}