//ให้สร้างฟังก์ชันรับพารามิเตอร์เป็นตัวเลข และเช็คว่าตัวเลขนั้นเป็นจำนวนเฉพาะหรือไม่
//ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 1 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

function checkPrimeNumber(num1) {
  let str = null;
  let count = 0;
  for (let i = 2; i <= num1; i++) {
    if (num1 % i === 0) {
      count++;
      console.log(count);
    }
  }
  if (count === 1) {
    str = "เป็นจำนวนเฉพาะ";
  } else {
    str = "ไม่เป็นจำนวนเฉพาะ";
  }
  return console.log(`${num1} ${str}`);
}

function showPrimeNumberto(num2) {
  for (let i = 2; i <= num2; i++) {
    let count = 0;
    for (let j = 2; j <= num2; j++) {
      if (i % j === 0) {
        count++;
        // console.log(count);
      }
    }
    if (count === 1) {
      console.log(`${i}`);
    }
  }
}
