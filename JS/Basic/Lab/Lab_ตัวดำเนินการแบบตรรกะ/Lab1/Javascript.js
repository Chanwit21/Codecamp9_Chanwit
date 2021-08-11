console.log("คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไรบ้าง")
console.log("alert(null || 2 || undefined);")
console.log("alert(alert(1) || 2 || alert(3));")
console.log("alert(1 && null && 2);")
console.log("alert(alert(1) && alert(2));")
console.log("alert(null || (2 && 3) || 4);")

// alert(null || 2 || undefined);      //2      //2
// alert(alert(1) || 2 || alert(3));   //2     //alert(1) 2 ตัวแรก false แต่มันก็ยังดำเนินการอยู่
// alert(1 && null && 2);              //null      //null
alert(alert(1) && alert(2));        //alert(1)     //alert(1) undefined เพราะมันทำ alert(1) แล้วให้ค่า undefined พอ undefined เป็น False AND เลยคืนค่า undefined มาให้
// alert(null || (2 && 3) || 4);       //3      //3