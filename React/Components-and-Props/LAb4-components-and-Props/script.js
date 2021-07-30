// จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product โดยที่ props ตัวนี้จะมี data type เป็น Object
// ให้แก้ไข Component ProductItem ตาม props ที่เปลี่ยนไป
// ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ตามเงื่อนไขที่กำหนด

// หรือ  Destructuring ตั้งแต่นำเข้า
function ProductItem({ product: { name, price, description } }) {
  // function ProductItem(props) {
  // const product = props.product;
  // หรือ  Destructuring
  // const { name, price, description } = props.product;

  // console.log(product)
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  );
}
const rootElement = document.querySelector("#root");
ReactDOM.render(
  <ProductItem
    // มี bracket { } สองอันเพื่อให้โปรแกรมรู้ว่าเราส่ง Object เข้าไป
    product={{ name: "BOMB", price: "1500$/month", description: "Smart" }}
  />,
  rootElement
);
