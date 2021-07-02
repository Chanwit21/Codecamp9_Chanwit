// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name
const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

function idToKey(arr) {
    const result = arr.reduce(function (accumulator,item) {
        accumulator[item["id"]] = {name : item["name"]}
        return accumulator;
    },{})
    return result;
}

console.log(idToKey(products));