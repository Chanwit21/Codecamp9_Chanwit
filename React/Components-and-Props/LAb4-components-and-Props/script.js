// จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product โดยที่ props ตัวนี้จะมี data type เป็น Object
// ให้แก้ไข Component ProductItem ตาม props ที่เปลี่ยนไป
// ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ตามเงื่อนไขที่กำหนด


function ProductItem(props) {
  const product = props.product
  // console.log(product)
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}
const rootElement = document.querySelector("#root");
ReactDOM.render(<ProductItem product={{name: 'BOMB', price: '1500$/month', description: 'Smart'}} />, rootElement);
