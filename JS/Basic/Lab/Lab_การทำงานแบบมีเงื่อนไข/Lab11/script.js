console.log("จาก Lab 8 ให้เขียนโค้ดในรูปแบบ Ternary Operators");

let score = prompt("input your Score :");

//แบบนี้
// let grade = (score >= 80)?"Your Grade is A" : (score >= 70)?"Your Grade is B":(score >= 60)?"Your Grade is C":(score >= 50)?"Your Grade is D":"Your Grade is F";

// alert(grade);

//หรือแบบนี้
score >= 80 ? alert("Your Grade is A") : score >= 70 ? alert("Your Grade is B"): score >= 60 ? alert("Your Grade is C"): score >= 50 ? alert("Your Grade is d"): alert("Your Grade is F");