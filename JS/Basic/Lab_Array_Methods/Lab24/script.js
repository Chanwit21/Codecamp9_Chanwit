// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

function changecamelCase(str) {
    const splitted = str.split("-");
    const transform = splitted.map((item,index) => {
        if (index === 0) return item ;
        return item[0].toUpperCase()+item.slice(1) ;
    })
    console.log(transform);
    return transform.join("");
}

// function changecamelCase(str) {
//     return str.split('-').map((item,index) => (index === 0) ? item : item[0].toUpperCase()+item.slice(1)).join('');
// }
console.log(changecamelCase("background-color"))
console.log(changecamelCase("border-radius-top"))