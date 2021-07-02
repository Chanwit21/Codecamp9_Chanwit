// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน
const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
function groupGender(arr) {
    const result = arr.reduce(function (accumulator,item) {
        if(!accumulator[item["sex"]]) {
            accumulator[item["sex"]] = [item["name"]];
        } else {
            accumulator[item["sex"]].push(item["name"])
        }
        return accumulator;
    },{})
    return result;
}
console.log(groupGender(persons));