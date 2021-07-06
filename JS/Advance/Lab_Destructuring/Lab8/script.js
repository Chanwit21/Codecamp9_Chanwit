// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)
function filterAge({firstName,lastName,age}){
    if(age) {
        if (age > 18) {
            return `Hi ${firstName} ${lastName}`
        } else {
            return `No access rights`
        };
    } else {
        return `Object Not Age`
    };
};
console.log(filterAge({firstName:"Cahnwit",lastName:"Pansila"}))