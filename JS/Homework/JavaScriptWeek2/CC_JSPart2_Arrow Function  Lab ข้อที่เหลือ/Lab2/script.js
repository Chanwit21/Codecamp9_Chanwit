//ให้เขียนฟังก์ชัน check ตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function 

const checkPrimeNumber = (num1) => {
    let count = 0;
    for (let i = 2; i <= num1; i++) {
      if (num1 % i === 0) {count++;}
    }
    return count === 1;
  }

  console.log(checkPrimeNumber(3));

  //เฉลย
  const isPrimenunber = (number) => {
    for (let j = 2; j < number; j++) {
      if (number % j === 0) return false;
    }
    return true;
  }