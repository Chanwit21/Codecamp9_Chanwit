// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

//วิธีของเราอย่าลืมกรองเหตุที่ทำให้เกิด Error ด้วย
let obj = {};
while(true) {
    let key = prompt("Enter Key");
    if (key.toLowerCase() === "stop") break;
    let value = prompt("Enter value");
    if (value.toLowerCase() === "stop") break;
    if ( key && key.trim()){                        //เช็คว่า key ไม่เป็น NaN undefined Null ""(String ว่า ) "      " (white Space)
        obj[key] = value;
    }else {
        alert("Invalid Key");
    }
}

//เฉลย
let obj = {};
while(true) {
    let key = prompt("Enter Key");
    if (key.toLowerCase() === "stop") break;
    let value = prompt("Enter value");
    if (value.toLowerCase() === "stop") break;
    if ( key && key.trim()){                        //เช็คว่า key ไม่เป็น NaN undefined Null ""(String ว่า ) "      " (white Space)
        obj[key] = value;
    }else {
        alert("Invalid Key");
    }
}