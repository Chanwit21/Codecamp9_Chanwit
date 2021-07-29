// ให้สร้าง Component ชื่อ ProductItem
// ใน Component แสดงข้อมูลดังนี้
// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product
// ชื่อ price และ description ของ product ถูกส่งมาทาง props
// ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้ 


function ProductItem(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
    </div>
  );
}
const rootElement = document.querySelector("#root");
ReactDOM.render(<ProductItem name='BOMB' price='1500$/month' description='Smart' />, rootElement);
