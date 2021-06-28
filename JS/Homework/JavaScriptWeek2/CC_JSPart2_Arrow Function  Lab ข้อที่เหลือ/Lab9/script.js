console.log("ให้เขียนฟังก์ชันเช็คปีที่เป็น leap year")
console.log("leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว ยกเว้นถ้าเป็นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะหาร 400 ลงตัว")

const checkLeapYear = (year) => {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
    }else if (year%4 === 0 ){
        return true;
    } else {
        return false;
    }
}

//เฉลย
const isLeapYear = year => {
    if (year % 100 === 0) return (year % 400 === 0) 
    return year % 4 === 0 ;
}
