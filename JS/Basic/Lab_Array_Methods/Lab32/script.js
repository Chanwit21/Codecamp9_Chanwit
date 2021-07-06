// จงนับชื่อที่ปรากฏใน names
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
function countPerson(arr) {
    const result = arr.reduce(function(accumulator, item) {
        if (!accumulator[item]){
            accumulator[item] = 1;
        } else {
            accumulator[item] += 1;
        }
        console.log(accumulator);
        return accumulator;
      }, {});
      return result;
}
console.log(countPerson(names))