# Function (9ข้อ)

- Write Reusable JavaScript with Functions
- Passing Values to Functions with Arguments
- Global Scope and Functions
- Local Scope and Functions
- Global vs. Local Scope in Functions
- Return a Value from a Function with Return
- Understanding Undefined Value returned from a Function
- Assignment with a Returned Value
- Stand in Line

# Basic
[1.Write Reusable JavaScript with Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)
```js
function reusableFunction () {
  console.log("Hi World");
}
reusableFunction()
```
[2.Passing Values to Functions with Arguments](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)
```js
function functionWithArgs(num1,num2) {
  console.log(num1+num2);
}
functionWithArgs(1,2);
```

# Scope
[1.Global Scope and FunctionsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
```js
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

[2.Local Scope and FunctionsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
```js
function myLocalScope() {

  // Only change code below this line
  var myVar = "Hello";

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

[3.Global vs. Local Scope in FunctionsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# Return
[1.Return a Value from a Function with Return](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)
```js
function timesFive(num) {
  return num*5;
}
```

[2.Understanding Undefined Value returned from a FunctionPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)
```js
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
```

[3.Assignment with a Returned Value](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value)
```js
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
var processed = processArg(7);
```

# Application 
[1.Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript) __(ใช้ความรู้เรื่อง Array)__
```js
// Finish and Paste your solution here




```