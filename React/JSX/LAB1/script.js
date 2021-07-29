// ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง
// ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง
// ให้ render หน้า web โดยใช้ JSX ดังนี้
// แสดงชื่อ fullName ใน tag <h1>
// แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)

const fullName = "Chanwit Pansila";
const birthYear = 1998;
const element = (
  <div>
    <h1>{fullName}</h1>
    <p>{birthYear}</p>
  </div>
);
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
