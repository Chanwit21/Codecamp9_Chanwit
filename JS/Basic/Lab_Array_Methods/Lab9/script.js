// ให้สร้างตัวแปร Array โดยเอาค่ามาจาก sports ในตำแหน่ง index 1 ถึง 3
const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
const copy = []
for (let i = 1; i <= 3;i++) {
    copy.push(sports[i]);
}
console.log(copy);