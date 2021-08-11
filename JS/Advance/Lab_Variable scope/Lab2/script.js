ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
function makeWorker() {
    let name = 'Pete';
    return function () {
      alert(name);
    };
  }
  let name = 'John';
  let work = makeWorker();
  work(); // *                  //alert John ออกมาเพราะ makeWorker() return function () {alert(name);}; แล้ว name ใน Globalscope คือ John