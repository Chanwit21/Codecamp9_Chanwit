console.log("ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย")
console.log("ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร")
console.log("ให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย")

let num1 = 0;
while (true) {
  num1 = +prompt("สำหรับผู้เล่นคนที่ 1 \nใส่เลขระหว่าง 1 ถึง 99 ที่ต้องการให้เพื่อนทายมา");
  if ( 1 < num1 && num1 < 99) {
    break;
  };
  alert("You don't enter number")
};

let num2 = 0;
let round = 0;

while(true) {
  num2 = +prompt("สำหรับผู้เล่นคนที่ 2 \nใส่เลขระหว่าง 1 ถึง 99 ที่ต้องการทายมา");
  round++;
  if (num1 === num2 ) {
    alert (`ยินดีด้วยคุณทายถูกแล้ว โดยจำนวนครั้งที่คุณใช้ทายคือ ${round}`);
    break;
  } 
  if (num1 > num2) {
    alert(`ค่าที่คุณทายมีค่าน้อยกว่าค่าที่ถูกต้อง`);
  } else {
    alert(`ค่าที่คุณทายมีค่ามากกว่าค่าที่ถูกต้อง`);
  }
}

// แบบเฉลย

const correctNumber = prompt("Enter correct nummber");

if(!isNumeric(correctNumber)) {    //check ว่าไม่ใช่ null  ไม่ใช่ String เปล่า ไม่ใช่ตัวเลข
  alert("You don't enter number");
}

let count = 0;

while (1) {
  const guessNumber = prompt('Guess my Number');
  if(!isNumeric(guessNumber)) {    //check ว่าไม่ใช่ null  ไม่ใช่ String เปล่า ไม่ใช่ตัวเลข
    alert("You don't enter number");
    continue;
  }

  count++;

  if (+correctNumber === +guessNumber) {
    alert(`ยินดีด้วยคุณทายทั้งหมด ${count} ครั้ง`)
  } else if (+correctNumber < +guessNumber) {
    alert("ค่ามากเกินไป");
  } else {
    alert("ค่าน้อยเกินไป");
  }
}

function isNumeric(str) {
  return !(!str || str.trim() === "" || !+str)
}