// push
// let fruits = ['Apple', 'Orange'];
// let ret = fruits.push('Pear');
// console.log(fruits); // Apple, Orange, Pear
// console.log(ret)

//splice
// let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// remove 3 first elements and replace them with another
// let arr2 = arr.splice(0, 3, "Let's", 'dance');
// console.log(arr); // now ["Let's", "dance", "right", "now"]
// console.log(arr2);
// let arr = ['I', 'study', 'JavaScript'];
// from index 2
// delete 0
// then insert "complex" and "language"
// let arr2 = arr.splice(2, 0, 'complex', 'language');
// console.log(arr); // "I", "study", "complex", "language", "JavaScript"
// console.log(arr2);

//concat
// let arr = [1,2];
// const newArr = arr.concat([3,4] ,[5,6]);
// console.log(newArr);
// console.log(arr)

//ทวน for in $$ for of
// const names = ["Boon","Team","May"];
// for (let i = 0; i < names.length; i++ ) {
//     console.log(names[i]);
// }

// console.log("----------------------------------------")

// for (let element of names) {
//     console.log(element);
// }

//forEach
// arr.forEach(function (item, index, array) {
//   // ... do something with item
// });

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });x


// fine fineindex
const product = ['Coke','Pepsi','Mirinda','Fanta'];
const founded = product.find((item,index,array) => {
    return item.includes('z');
});
console.log(founded)

const idx = product.findIndex((item,index,array) => {
    return item.includes('e');
});
console.log(idx)