console.log("จงเขียนโค้ดด้านขวาแบบ switch case")
console.log("let a = +prompt('a?');")
console.log("")
console.log("if (a == 0) {")
console.log("  alert(0);")
console.log("}")
console.log("if (a == 1) {")
console.log("  alert(1);")
console.log("}")
console.log("")
console.log("if (a == 2 || a == 3) {")
console.log("  alert('2,3');")
console.log("}")

let a = +prompt('a?');

switch (a) {
    case 0 :
        alert(0);
        break;
    case 1 :
        alert(1);
        break;
    case 2 :
    case 3 :
        alert('2,3');
        break;
    default :
        alert("Invalid number")
}
