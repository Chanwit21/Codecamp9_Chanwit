console.log("จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด")
console.log("ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A ")
console.log("ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B")
console.log("ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C")
console.log("ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D")
console.log("ถ้าคะแนน น้อยกว่า 50 ได้ F ")

let score = prompt("input your Score :");

if (score === null || score.trim() === "" || isNaN(+score))

if (score >= 80) {
    alert("Your Grade is A");
}else if (score >= 70) {
    alert("Your Grade is B");
}else if (score >= 60) {
    alert("Your Grade is C");
}else if (score >= 50) {
    alert("Your Grade is D");
}else {
    alert("Your Grade is F");
}