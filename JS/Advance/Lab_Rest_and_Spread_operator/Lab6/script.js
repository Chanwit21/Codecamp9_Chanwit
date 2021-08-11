// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator
function inputProfile(name,surName,...Hobby) {
    const result = {name,surName};
    for (let i = 0; i < Hobby.length; i++) {
        result[`Hobby ${i+1}`] = Hobby[i];
    }
    result["Hobby Length"] = Hobby.length;
    return result;
}

console.log(inputProfile("BOMB","Pansila","Game","Football","clycing"))