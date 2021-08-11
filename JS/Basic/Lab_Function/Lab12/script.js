//บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function getLongText() {
    return
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
  
  console.log(getLongText()); // *      // log undefined ไม่เข้าถึง lorem เพราะอยู่คนละบันทัด มันจะใส่ ; ให้หลัง Return อัตโนมัตเพราะ Javascript จะใส่ให้ Auto ถ้าอยากให้ Return หลายๆบันทัดให้ใส่วงเล็บครอบ
  