//ให้เขียนฟังก์ชัน check ตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function 

let checkPrimeNumber = (num1) => {
    let str = null;
    let count = 0;
    for (let i = 2; i <= num1; i++) {
      if (num1 % i === 0) {count++;}
    }
    str = (count === 1) ? "เป็นจำนวนเฉพาะ" : "ไม่เป็นจำนวนเฉพาะ";
    return console.log(`${num1} ${str}`);
  }

  console.log(checkPrimeNumber(3));