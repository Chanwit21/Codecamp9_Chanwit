const squareList = arr => {
  // Only change code below this line
  const arrFill = arr.filter(item => item > 0 && Number.isInteger(item))
  const result = arrFill.map (item => item**2)
  return result;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);