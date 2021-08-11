// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม
function removeRandom(array) {
    const clone = [...array];
    const random = Math.floor(Math.random()*clone.length);
    console.log(random);
    clone.splice(random,1)
    return clone;
}
console.log(removeRandom([1,2,3,4,5,6,7,8,9,10]))