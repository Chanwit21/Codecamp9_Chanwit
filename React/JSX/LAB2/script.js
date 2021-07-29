// ให้สร้างตัวแปรชื่อ height และ weight เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI
// ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h1>

  const height = 171
  const weight = 65
  function calcBMI(height, weight) {
    return (weight/((height/100)**2)).toFixed(2)
  }
  const element = (
    <div>
      <h1>BMI is {calcBMI(height, weight)}</h1>
    </div>
  );
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
