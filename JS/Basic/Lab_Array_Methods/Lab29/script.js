// จงหาผลคูณของ element ใน nums
const nums = [-3, 2, 11, -7, 4, 6];
const result = nums.reduce((accumulator,currentvalue) => {
    accumulator *= currentvalue;
    return accumulator;
},1)

//เฉลย
// const result = nums.reduce((accumulator,currentvalue) => accumulator *= currentvalue)
// const result = nums.reduce((accumulator,currentvalue) => accumulator *= currentvalue,1)
console.log(result)