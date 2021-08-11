typeof 'x';         //string
typeof x;           //undefined
typeof ``;          //String
typeof Infinity;    //number
typeof(100 / 0);    //number
typeof(1 + '3');    //เราคิดว่าเป็น number แต่มันเป็น string "13"
typeof(1 * 'a');    //ได้ NaN type เป็น number
typeof null;        //object