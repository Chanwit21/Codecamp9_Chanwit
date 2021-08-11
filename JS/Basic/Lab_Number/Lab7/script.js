// จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

function randomDice() {
    return Math.trunc(Math.random()*(7-1)+1)
}


for (let i = 0; i < 100;i++){
    console.log(randomDice())
} 