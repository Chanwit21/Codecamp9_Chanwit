/*
โจทย์ฝึก algo (มาจากรุ่นพี่ที่ไปสมัครงาน) -- ลองฝึกเล่นได้ครับ

given n an integer return smallest integer  greater than n and the sum of whose digit twice as big as the of digit of n

Given N = 14, function should return 19. The sum of digit 19 (1+9 = 10) is twice as big as sum of digits of
14(1+4 =5)
Given N = 10 the function should Return 11
Given N = 99 the function should Return 9999
N is integer within range[1..500]

ใส่ N = 14 ผลรวมเลขโดดเป็น 5
สิ่งที่ต้องการ 
1. result > N (14)
2. ผลรวมเลขโดดของ result ต้องเป็น 2 เท่าของผลรวมเลขโดดของ N  
3. result เป็นเลขที่น้อยที่สุด

N  sum digit N  sum digit result   result
1   1            1*2               (0+2)2
2   2            2*2               (0+4)4
3   3            3*2               (0+6)6
4   4            4*2               (0+8)8
5   5            5*2               (1+9)19
6   6            6*2               (3+9)39
7   7            7*2               (5+9)59
8   8            8*2               (7+9)79
9   9            9*2               (9+9)99
.
.
.
14  1+4          5*2               (1+9)19
.
.
99  9+9          18*2              (9+9+9+9)9999
*/

function algoNum(N){
    let str = "" + N;
    let arr = str.split("");
    let sumDigitN = 0;
    for(let value of arr) {
        sumDigitN += +value;
    }
    mul2SumDigitN = sumDigitN*2;
    let result = mul2SumDigitN;
    while(true){
        let str2 = "" + result;
        let arr2 = str2.split("");
        let sumResult = 0;
        for (let value of arr2){
            sumResult += +value;
        }
        if (sumResult === mul2SumDigitN){
            break;
        }
        result++;
    }
    // console.log(arr)
    // console.log(sumDigitN)
    // console.log(mul2SumDigitN)
    // console.log(result)
    return result;
}
console.log(algoNum(1))
console.log(algoNum(2))
console.log(algoNum(3))
console.log(algoNum(4))
console.log(algoNum(5))
console.log(algoNum(6))
console.log(algoNum(7))
console.log(algoNum(8))
console.log(algoNum(9))
console.log(algoNum(14))
console.log(algoNum(99))