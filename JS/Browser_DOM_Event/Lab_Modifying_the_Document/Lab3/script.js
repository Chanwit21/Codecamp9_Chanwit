// จงเขียนฟังก์ชัน clear(elem) เพื่อลบ <li> ภายใน <ul> ทั้งหมด
function clear(elem) {
  const body = document.querySelector('body')
  const li = document.querySelectorAll('ol li')
  setTimeout(() => {
      for (let ele of li){
          ele.remove();
      }
  }, 1000);
}
const elem = document.getElementById('elem')
console.log(clear(elem)); // clears the list
