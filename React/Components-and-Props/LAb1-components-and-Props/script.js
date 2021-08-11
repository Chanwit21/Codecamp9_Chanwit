// ให้สร้าง Component ชื่อ Profile
// ใน Component ประกอบด้วย
// tag <h1> แสดงชื่อ John Doe
// tag <h2> แสดงอายุมีค่าเท่ากับ 27
// ให้ render Profile ในหน้า web

function Profile() {
  const fullName = "Chanwit Pansila";
  const age = 23;
  return (
    <div>
      <h1>{fullName}</h1>
      <h2>{age}</h2>
    </div>
  );
}
const rootElement = document.querySelector("#root");
ReactDOM.render(Profile(), rootElement);
