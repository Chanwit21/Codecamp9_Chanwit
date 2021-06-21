console.log("จงเขียนโค้ดด้านขวาแบบ if else")
console.log("switch (browser) {")
console.log("    case 'Edge':")
console.log("      alert(\"You\'ve got the Edge!\");")
console.log("      break;")
console.log("    case 'Chrome':")
console.log("    case 'Firefox':")
console.log("    case 'Safari':")
console.log("    case 'Opera':")
console.log("      alert('Okay we support these browsers too'")
console.log("      break;")
console.log("    default:")
console.log("      alert('We hope that this page looks ok!');")
console.log("  }")


let browser = prompt("Input Your Browser")

if (browser === 'Edge'){
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
