// try {
//   const input = propmt("Enter number");
//   if (isNaN(input)) {
//     throw new Error("Invalid number");
//   }
//   alert("You entered : " + input);
// } catch (err) {
//   alert("Error: " + err.message);
// }

// try {
//   const name = "John";
//   name = "Jim";
//   console.log("try " + name);
// } catch (err) {
//   console.log("catch1 " + err);
//   console.log("catch2 " + err.name);
//   console.log("catch3 " + err.message);
// }

try {
  const input = {
    payee: "john",
    amount: -100,
    category: "",
    birthDate: "27/1/90",
  };
  //   const input = { firstname: "john", age: "Ten", birthDate: "27/1/90" };
  if (isNaN(input.amount)) {
    throw new Error("Amount must be numeric");
  }
  if (+input.amount < 0) {
    throw new Error("Amount must be greater than zero");
  }
} catch (err) {
  console.log(err.message);
}
