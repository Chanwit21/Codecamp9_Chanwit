// const x = 0;
// const y = 1;
// const z = 2;
// // if( x != y)console.log('Hi')
// // console.log('Hello')
// // let b = 0;
// // const a = (x===y)?"Hello":(z > y)? "Hi": 'last';
// // console.log(a)
// // console.log(b)
// let x = 1
// while (x < 7) {
//     console.log(x)
//     x++
// }

class Test {
    constructor(_num1,_num2){
        this.num1 = _num1;
        this.num2 = _num2;
    }
    static testMethode() {
        return this.reduce((acc,crr,index) => {
            if(index === 0) return crr;
            if(crr>acc) return acc;
            return acc; 
        },0);
    }
}

const test = new Test(1,2);
console.log(test)
console.log(test.testMethode())
