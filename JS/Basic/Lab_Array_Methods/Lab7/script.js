// ให้เขียนโค้ดเพื่อ remove element ในตัวแปร fish ออกให้หมด
let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(fish.length)
let round = fish.length;

for (let i = 0; i < round; i++) {
    console.log(i)
    fish.pop();
    // fish.shift();
}

// fish.splice(0,fish.length);
console.log(fish);