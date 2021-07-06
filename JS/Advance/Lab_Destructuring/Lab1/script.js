// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first); // *                        // ได้ 'Maya' เพราะว่า Destructuring มาเป็นตำแหน่ง index 0 ของ ['Maya', 'Marisa', 'Chi']
console.log(second); // **                      // ได้ 'Marisa' เพราะว่า Destructuring มาเป็นตำแหน่ง index 1 ของ ['Maya', 'Marisa', 'Chi']
console.log(third); // ***                      // ได้ 'Chi' เพราะว่า Destructuring มาเป็นตำแหน่ง index 2 ของ ['Maya', 'Marisa', 'Chi']