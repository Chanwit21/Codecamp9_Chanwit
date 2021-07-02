// จงหา unique array element ของ alphabets
let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']
function uniqueArrayElement(arr) {
    const result = arr.reduce(function (accumulator,item) {
        if (!accumulator.includes(item)){
            accumulator.push(item);
        }
        return accumulator;
    },[])
    return result;
}

console.log(uniqueArrayElement(alphabets));