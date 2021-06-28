// ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission
// หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า 
const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permission = {};
Object.assign(permission,permission1,permission2,permission3,permission4)

console.log(permission);