var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let clone = [...arr];
  return clone.sort((a,b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b ) return -1;
  })
  // Only change code above this line
}
nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray))