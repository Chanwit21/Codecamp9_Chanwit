// // Setup
// var recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// // console.log(recordCollection[5439]["artist"] = "ABBA")
// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
//     let arr = [];
//     arr.push(value);
//     records[id]["tracks"] = arr;
//   } else if (prop === "tracks" && value !== "") {
//     records[id]["tracks"].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(recordCollection, 2548, "artist", ""));
// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// console.log(updateRecords(recordCollection, 2548, "tracks", ""));

// Setup
// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   let checkHaveName = false;
//   let checkHaveProp = false;
//   for (let value of contacts) {
//     if (value["firstName"] === name) {
//       checkHaveName = true;
//       for (let key in value) {
//         if (key === prop) {
//           checkHaveProp = true;
//         }
//       }
//       console.log(checkHaveName)
//       console.log(checkHaveProp)
//       if (checkHaveName && checkHaveProp) return value[prop];
//       return "No such property";
//       break;
//     }
//   }
//   return "No such contact";
//   // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "address"));
// // console.log(lookUpProfile("Kristian", "lastName"))
// // console.log(lookUpProfile("Sherlock", "likes"))

// Only change code below this line
// ใช้ recursive
// function countdown(n){
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   };
// };
// console.log(countdown(10))
// console.log(countdown(5))
// // Only change code above this line

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   } else {
//     const countArray = rangeOfNumbers(startNum + 1,endNum);
//     countArray.unshift(startNum);
//     return countArray;
//   }
// }

// console.log(rangeOfNumbers(1, 5));

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = `['<li class="text-warning">${arr[0]}</li>','<li class="text-warning">${arr[1]}</li>','<li class="text-warning">${arr[2]}</li>']`;
  // Only change code above this line

  return failureItems;
}
console.log(makeList(result.failure))