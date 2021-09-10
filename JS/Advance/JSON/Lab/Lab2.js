const person = {
  firstName: 'John',
  lastName: 'Doe',
  wife: undefined,
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const json = JSON.stringify(person);
console.log('json ' + json); //json {"firstName":"John","lastName":"Doe"}
const obj = JSON.parse(json);
console.log(obj); //{ firstName: 'John', lastName: 'Doe' } เพราะว่า value ของ JSON มีค่าได้ดังนี้ Object Array Primitive ต่างๆ ได้แก่ String Number Boolean และ Null
