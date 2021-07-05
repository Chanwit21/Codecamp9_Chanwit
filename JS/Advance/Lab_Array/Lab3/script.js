// ให้ทำตามขั้นตอนดังนี้
// สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// ลบ element ตัวแรก โดยใช้คำสั่ง delete
// จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด

const styles = new Array("Jazz","Blues");
console.log(styles);
styles[styles.length] = "Rock-n-Roll";
console.log(styles);
styles[(styles.length-1)/2] = "Classic";
console.log(styles);
delete styles[0];           //ถ้าใช้ delete จะทำการลบแต่ยังเหลือพื้นที่ว่างอยู่
console.log(styles);
console.log(styles);        // [empty, "Classic", "Rock-n-Roll"]
