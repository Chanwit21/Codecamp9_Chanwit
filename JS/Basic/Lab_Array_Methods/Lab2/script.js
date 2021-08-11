// ผลจากการรันคำสั่งในบรรทัด * คืออะไร
let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // *          //alert Array arr ออกมา ["a","b",function() {alert(this);}]
