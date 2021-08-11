console.log("คำสั่งไหนจะทำงานบ้าง")
console.log("if (-1 || 0) alert( 'first' );")
console.log("if (-1 && 0) alert( 'second' );")
console.log("if (null || -1 && 1) alert( 'third' );")

if (-1 || 0) alert( 'first' );              //ทำงาน
if (-1 && 0) alert( 'second' );             //ไม่ทำงาน
if (null || -1 && 1) alert( 'third' );      //ทำงาน And ทำงานก่อน OR