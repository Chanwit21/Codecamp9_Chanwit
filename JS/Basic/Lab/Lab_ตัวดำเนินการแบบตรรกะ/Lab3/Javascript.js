console.log(
  "ให้ใช้ prompt ในการถามชื่อผู้ login และให้รับค่าเก็บไว้ในตัวแปร user"
);
console.log(
  "ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้กำหนด default value ของตัวแปร user เป็น guest"
);
console.log("ถ้าผู้ใช้กรอกว่า “codecamp” ให้ใช้ prompt ถาม password");
console.log("ถ้า password เป็น “123456” ให้ user มีค่าเท่ากับ codecamp");
console.log("ถ้าไม่ใช่ให้ alert “Wrong password”");
console.log(
  "ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “codecamp” ให้ user มีค่าเป็น guest”"
);
console.log("alert(“welcome”) ตามด้วย user");

// ของเรา
// let user = prompt("Input Your Username:") || "guest";
// if (user === "codecamp") {
//     let password = prompt("Input Your Password");
//     if (password === "123456") {
//         alert(`Welcom ${user}`);
//     } else {
//         alert("Wrong password");
//     }
// } else {
//     user = "guest";
//     alert(`Welcom ${user}`);
// }

//ของอาจารย์1
let user = prompt("Enter Username");
if (user === '' || user === null){
  user = "guest";
}

let isCorrectPassword = false;

if (user === "codecamp") {
  const password = prompt("Enter Password");
  if (password === "123456") {
    user = "codecamp";
    isCorrectPassword = true;
  } else {
    alert("Wrong password");
  };
} else {
  user = "guest";
};

if (isCorrectPassword || user === "guest") {
  alert(`Welcome ${user}`)
};

//ของอาจารย์ 2
// let user = prompt("Enter Username :") || "guest";

// let isCorrectPassword = false;

// if (user === "codecamp") {
//   const password = prompt("Enter Password");
//   if (password === "123456") {
//     user = "codecamp";
//     isCorrectPassword = true;
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   user = "guest";
// }

// (isCorrectPassword || user === 'guest') && alert(`Welcome ${user}`);
