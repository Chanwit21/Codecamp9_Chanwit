//ให้เขียนฟังก์ชัน check ตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function 

let checkPrimeNumber = (num1) => {
    let count = 0;
    for (let i = 2; i <= num1; i++) {
      if (num1 % i === 0) {count++;}
    }
    return count === 1;
  }

  console.log(checkPrimeNumber(3));