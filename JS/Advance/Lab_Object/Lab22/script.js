// ให้เขียนโค้ดเพื่อ log province ของ product1
// หากมี product2 เป็น object ว่าง ให้ log province ของ product2 โดยใช้คำสั่งเดียวกับ product (หาก Error ให้หาวิธีแก้) 
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

const product2 = {};
console.log(product1.distributor.address.province);
console.log(product2.distributor?.address?.province);
