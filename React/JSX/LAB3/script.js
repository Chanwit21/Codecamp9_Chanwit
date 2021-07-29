// ให้สร้าง tag <span> และ <input>
// tag <input> มี class ชื่อ username มี id คือ username และมี attribute ชื่อ name ให้มีค่าเท่ากับ username
// tag <span> ให้ใส่ข้อความ Username และมี attribute ชื่อ for ให้มีค่าเท่ากับ id ของ tag <input>
// ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX

const element = (
  <div>
    <label htmlFor="username">Username</label>
    <input className="username" id="username" name="username"></input>
  </div>
);
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
