// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
  ];
  console.log(raindrops); // *                      // ได้ 'Raindrops on roses' เพราะว่า Destructuring มาเป็นตำแหน่ง index 0 ของ ['Raindrops on roses','whiskers on kittens','Bright copper kettles','warm woolen mittens',]
  console.log(whiskers); // **                      // ได้ 'whiskers on kittens' เพราะว่า Destructuring มาเป็นตำแหน่ง index 1 ของ ['Raindrops on roses','whiskers on kittens','Bright copper kettles','warm woolen mittens',]
  console.log(aFewOfMyFavoriteThings); // ***       // ได้ ['Bright copper kettles','warm woolen mittens',] เพราะว่า Destructuring และใช้ rest Parameter เก็บไวเป็น array ของตัวที่เหลือ ['Raindrops on roses','whiskers on kittens','Bright copper kettles','warm woolen mittens',]