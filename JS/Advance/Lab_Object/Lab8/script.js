// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย จนกว่าจะกด 0

const fruit = {};
while(true) {
    let key = prompt("Enter fruit");
    if (key === "0") break;
    let value = prompt("Enter number of fruit");
    if (value === "0") break;
    if (value > 1) key = key + "s";
    fruit[key] = value;
}