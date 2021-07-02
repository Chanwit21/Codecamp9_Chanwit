let string = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1 n: 2, t: 1, h:1, a:2, d:1}
function countAlphabet(str) {
  const array = str.toLowerCase().split('');
  const result = array.reduce(function (accumulator, item) {
    if (item.trim() !== "") {
        // console.log(item)
        // console.log(accumulator[item])
      if (!accumulator[item]) {
        accumulator[item] = 1;
      } else {
        accumulator[item] += 1;
      }
    }
    return accumulator
  }, {});
  return result;
}
console.log(countAlphabet(string));
