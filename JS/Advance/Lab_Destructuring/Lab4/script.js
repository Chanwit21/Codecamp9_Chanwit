// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // *                                   // ได้ 8 เพราะว่า Destructuring และชื่อตัวแปรตรงกับคำว่า numPlanets และมีค่า Value เท่ากับ 8 จึง Assign ค่า 8 ให้กับตัวแปร numPlanets
console.log(yearNeptuneDiscovered); // **                       // ได้ 1846 เพราะว่า Destructuring และชื่อตัวแปรตรงกับคำว่า yearNeptuneDiscovered และมีค่า Value เท่ากับ 1846 จึง Assign ค่า 1846 ให้กับตัวแปร yearNeptuneDiscovered