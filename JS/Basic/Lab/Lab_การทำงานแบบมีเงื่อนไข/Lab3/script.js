console.log("จงเขียนโค้ดเพื่อรับ input เข้ามา โดยให้ถามว่า “เดาชื่อฉันซิ” ")
console.log("หาก input ที่รับเข้ามาตรงกับชื่อตัวเองให้โชว์ข้อความว่าถูกต้อง")
console.log("หาก input ที่รับเข้ามาไม่ตรงกับชื่อตัวเองให้โชว์ข้อความว่าผิด")

let myName = prompt("ทายชื่อเรามาสิ ?");

if ("bomb" === myName.toLowerCase() || "บอมบ์" == myName) alert(`ใช่เราชื่อ ${myName}`);
else alert("ผิดนาจาาาาา ลองรีเฟรชแล้วลองทายใหม่น้าา ;) ")
