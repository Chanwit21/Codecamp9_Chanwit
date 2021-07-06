// ให้สร้าง Class Sale มี property ชื่อ name และมี method calcPrice() เพื่อคำนวณราคาสุทธิหลังหักส่วนลด
// ให้สร้าง Class Beverage มี property ชื่อ amount, price และ discount
// ให้ Beverage สืบทอดมาจาก Sale
// ให้สร้าง object ชื่อ beverage จาก Class Beverage โดยมี name, amount, price และ discount เท่ากับ Pepsi, 3, 19 และ 10% ตามลำดับ
// ให้ beverage เรียก method calcPrice() 
class Sale {
    constructor (name) {
        this.name = name;
        this.type = "Drink"
    };
    calcPrice () {
        let discountNum = 1-this.discount.slice(0,discount.length-1)/100
        // console.log(discount.slice(0,discount.length-1));
        return this.amount*this.price*(discountNum)
    }
}
class Beverage extends Sale {
    constructor (name,amount, price, discount) {
        super(name)
        this.amount = amount;
        this.price = price;
        this.discount = discount;
    }
}

const beverage = new Beverage("Pepsi",3,19,"10%");
// console.log(beverage)
console.log(beverage.calcPrice ())
