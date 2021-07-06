// จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// ถ้า salaries เป็น empty object ให้ return null
// ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalaries(salaries1) {
    if (!Object.values(salaries1).length) return null;
    let result = Object.entries(salaries1).reduce((accumulator , [name,salaries] ,index) => {
        if (index === 0) return {nameOfMaxSalaries: name,salaries: salaries };
        if (salaries > accumulator["salaries"]) return {nameOfMaxSalaries:name,salaries: salaries }
        return accumulator;
    },{nameOfMaxSalaries:"",salaries: 0})
    return result.nameOfMaxSalaries;
}
console.log(topSalaries(salaries));
