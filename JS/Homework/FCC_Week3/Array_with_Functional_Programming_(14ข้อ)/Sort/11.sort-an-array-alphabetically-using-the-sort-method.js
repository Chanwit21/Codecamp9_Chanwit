function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort((a,b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  })
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))