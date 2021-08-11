// ผลจากการรันคำสั่งในบรรทัด * คืออะไร
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // *              // 1
console.log(beasts.indexOf('bison', 2)); // **          // 4
console.log(beasts.indexOf('giraffe')); // ***          // -1