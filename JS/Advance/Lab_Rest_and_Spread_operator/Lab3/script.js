// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

const mergeObjects = (...arrayObject) => {
    const result = {};
    for (let i = arrayObject.length-1; i >= 0; i--) {
        Object.assign(result,arrayObject[i]);
    };
    return result
};

const profile1 = {
    name:"Bomb",
    age : 23,
}

const profile2 = {
    name: "Som",
    tel: 123456,
}
console.log(mergeObjects(profile1,profile2))