// โค้ดด้านล่างทำงานได้หรือไม่ เพราะอะไร
  const = element (
    <h1>Welcome to Thailand</h1>
    <h2>Land of smile</h2>
  );
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);

// ไม่ได้เพราะว่า JSX ต้องมี root element  ที่เป็น Parent แค่ตัวเดียว วิธีแก้ใส่  Fragment หรือ div ครอบ