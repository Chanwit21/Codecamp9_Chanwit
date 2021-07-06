// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
let arr = [1, [2, [[[3, 4], 5], 6]]];
const [a,[b,[[[c,d],e],f]]] = arr;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
