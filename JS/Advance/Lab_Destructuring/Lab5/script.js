// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  let { numPlanets, ...discoveryYears } = planetFacts;
  console.log(discoveryYears); // *                         // ได้ {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659} เพราะว่า destructuring แล้วใช้ rest parameter มันเก็บค่าที่เหลือที่ที่ไม่ตรงกับค่า ชื่อ parameter ที่ตรงกับ key แแกมา