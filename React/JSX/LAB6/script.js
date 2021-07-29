// ให้สร้างตัวแปร 6 ตัวเก็บค่าอะไรก็ได้ แต่จะต้องมี data type เป็น String Number Boolean null undefined และ object
// ให้ render ตัวแปรทั้ง 6 ออกมาในหน้า web

  const fullName = "Chanwit Pansila";
  const birthYear = 1998;
  const boo = true;
  const nul = null;
  const undefin = undefined;
  const obj = {
    fname: "Chanwit",
    lname: "Pansila",
  };
  const element = (
    <div>
      <h1>{fullName}</h1>
      <p>{birthYear}</p>
      <p>{boo}</p>
      <p>{nul}</p>
      <p>{undefin}</p>
      {/* <p>object {obj}</p>*/}
      {/* error เพราะว่าเป็น obj แล้วมันไม่ยอมให้ object เป็น React Child   */}
    </div>
  );
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
