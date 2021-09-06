function spacilaSum(obj) {
  let result = 0;
  for (let key in obj) {
    const value = JSON.parse(obj[key]);
    if (isNaN(value)) {
      const insideSum = value.reduce((acc, curr) => {
        return acc + +curr;
      }, 0);
      result += insideSum;
    } else {
      result += value;
    }
  }
  return result;
}

module.exports = { spacilaSum };
