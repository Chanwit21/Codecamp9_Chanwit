// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

let obj = {};
while(true) {
    let key = prompt("Enter Key");
    if (key.toLowerCase() === "stop") break;
    let value = prompt("Enter value");
    if (value.toLowerCase() === "stop") break;
    obj[key] = value;
}