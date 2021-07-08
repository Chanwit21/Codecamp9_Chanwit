// คำสั่งใดทำงานได้ เมื่อ button คือ element button 
button.addEventListener('click', () => alert('1'));  // (1)
button.removeEventListener('click', () => alert('1')); // (2)
button.onclick = () => alert(2); // (3)

// ตอบ 1 และ 3