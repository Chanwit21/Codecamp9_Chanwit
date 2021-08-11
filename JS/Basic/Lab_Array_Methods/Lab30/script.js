// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก;s
const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];
// expected result: 89
function averageScore(arr) {
  return arr.reduce((accumulator, item) => accumulator + item.score*item.weight,0);
}

console.log(averageScore(scores))