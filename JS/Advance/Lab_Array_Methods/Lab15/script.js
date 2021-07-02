// ผลจากการรันคำสั่งในบรรทัด * คืออะไร
console.log([1, 2, 3].includes(2)); // *                // true
console.log([1, 2, 3].includes(4)); // **               // false
console.log([1, 2, 3].includes(3, 3)); // ***           // false
console.log([1, 2, 3].includes(3, -1)); // ****         // true
console.log([1, 2, NaN].includes(NaN)); // *****        // true
console.log(['1', '2', '3'].includes(3)); // ******     // false
