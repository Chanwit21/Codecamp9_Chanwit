// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่
function checkEmptyObj(obj) {
  if (Object.keys(obj).length) return false;
  return true;
}
//หรือ
function checkEmptyObj2(obj) {
  return !Object.keys(obj).length; 
}
//เฉลย 
function checkEmptyObj3(obj) {
  return Object.keys(obj).length === 0; 
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(checkEmptyObj({}));
console.log(checkEmptyObj(salaries));
console.log(checkEmptyObj2({}));
console.log(checkEmptyObj2(salaries));
console.log(checkEmptyObj3({}));
console.log(checkEmptyObj3(salaries));
