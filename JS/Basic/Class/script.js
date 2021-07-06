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
// const product = ['Coke','Pepsi','Mirinda','Fanta'];
// const founded = product.find((item,index,array) => {
//     return item.includes('z');
// });
// console.log(founded)

// const idx = product.findIndex((item,index,array) => {
//     return item.includes('e');
// });
// console.log(idx)


// Array Reduce Example
const nums = [-3,2,11,-7,4,6];
const result = nums.reduce((accumulator, item, index, array) => {
    console.log(`acc ; ${accumulator},item ; ${item},index ; ${index},array ; ${array}`);
    return accumulator + item; //สิ่งที่ Return ในแต่ละรอบจะไปเป็นค่า accumulator ของรอบถัดไป
},0)
console.log(result);
//first call callback function
// accumulator = initial value (0),item = first element of array (-3),index = array index (0)
// array = self ([-3,2,11,-7,4,6]) return accumulator + item (0 + 3 = -3)
//secound call callback function
// accumulator = return value from first call (-3),item = secound element of array (2),index = array index (1)
// array = self ([-3,2,11,-7,4,6]) return accumulator + item (-3 + 2 = -1)
//third call callback function
// accumulator = return value from secound call (-1),item = third element of array (11),index = array index (2)
// array = self ([-3,2,11,-7,4,6]) return accumulator + item (-1 + 11 = 10)
//fourth call callback function
// accumulator = return value from third call (10),item = fourth element of array (-7),index = array index (3)
// array = self ([-3,2,11,-7,4,6]) return accumulator + item (10 + -7 = 3)
//fifth call callback function
// accumulator = return value from fourth call (3),item = fifth element of array (4),index = array index (4)
// array = self ([-3,2,11,-7,4,6]) return accumulator + item (3 + 4 = 7)
//sixth call callback function
// accumulator = return value from fifth call (7),item = sixth element of array (6),index = array index (5)
// array = self ([-3,2,11,-7,4,6]) return accumulator + item (7 + 6 = 13)
//end of array no more call callback function then return value from last call (13) toresult
