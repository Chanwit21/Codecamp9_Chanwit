// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไรฝ
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // *  //Your name is Alejandro and you like purple เพราะค่าที่ส่งไป ถูก destructering แล้วส่งค่าไปเรียบร้อยแล้ว
getUserData({ firstName: "Melissa" }); // **                            //Your name is Melissa and you like green เพราะค่าที่ส่งไป ถูก destructering แล้ว assign ค่าไปที่ firstName แล้วค่า favoriteColor ไม่ได้ถูก assign  จึงใช้ค่า default เป็น green
getUserData({}); // ***                                                 //Your name is undefined and you like green เพราะ firstName แล้วค่า favoriteColor ไม่ได้ถูก assign ค่า favoriteColor จึงใช้ค่า default เป็น green แต่ค่า firstName เมื่อไม่ได้ assign ค่าจึงให้ค่าเป็น undifined
