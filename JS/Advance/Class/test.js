// export function sayHi() {
//     console.log('Hello from test.js');
// }

function sayHi2() {
    console.log('Hello from test.js_2');
}
// export {sayHi2 as hi2}

// function sayHi3() {
//     console.log('Hello from test.js_3');
// }
// export default function () {
//     console.log('Default Export');
// }

//หรือ 
// export default sayHi3;

const month = ["Jan","Feb"];
function sayHO() {
    console.log("Say Ho");
};
export { sayHi2, month, sayHO};