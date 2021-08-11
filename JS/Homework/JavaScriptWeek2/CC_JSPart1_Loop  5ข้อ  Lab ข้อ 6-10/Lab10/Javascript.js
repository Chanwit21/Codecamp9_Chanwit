console.log("ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100");

//ทฤษฏี(factorial(n-1)+1)%n === 0 ใช้ไม่ได้
// for (let i = 1; i <= 20; i++) {
//   let factorial = 1;
//   for (let j = 1; j <= i-1 ; j++) {
//     factorial *= j;
//   };
//   console.log(`i ${i}  ,factorial ${factorial} mod ${(factorial+1)%i}`)
//   if ((factorial+1)%i === 0 ){
//     console.log(i);
//   }
// }

//ทฤษฏี(5**i - 5) % i === 0ใช้ไม่ได้
// for (let i = 1; i <= 60; i++) {
//   if ((5**i - 5) % i === 0) {
//     console.log(i);
//   }
// }

//วิธีของเรา
// let start = 2;
// let final = 100;
// let count1 = 0;

// for (let i = start; i <= final; i++) {
//   let count = 0;
//   for (let j = start; j <= final;j++ ){
//     if (i%j === 0) {
//       count++;
//       // console.log(count);
//     }
//   }
//   if (count === 1) {
//     count1++
//     console.log(`จำนวนเฉพาะตัวที่ ${count1} : ${i}`);
//   }
// }

//แบบเฉลย
for (let i = 2; i<=100;i++ ) {
  let isPrime = true;
  for (let j = 2; j < i ; j++){
    if ( i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}