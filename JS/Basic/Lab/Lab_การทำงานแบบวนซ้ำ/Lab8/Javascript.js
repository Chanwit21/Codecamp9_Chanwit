console.log("ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, string ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเล")
console.log("ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา")

let sum = 0;
let count = 0;
let input = 0;
//แบบที่1
while (true) {
    input = prompt("Input Your Number :");
    if (input < 0 ||input ==="0" || input === null || input.trim() === "" || !(+input)) { //!(+input) ใช้ Check ว่าเป็น String ไหม
        break;
    };
    count++;
    sum += +input;
    // console.log(input);
};

alert(`ผลรวมของค่าทั้งหมดที่ใส่เข้ามาคือ ${sum} ค่าเฉลี่ยของค่าทั้งหมดที่ใส่เข้ามาคือ ${sum/count}`);
