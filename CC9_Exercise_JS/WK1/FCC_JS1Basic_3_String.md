# STRING PRACTICE (15ข้อ)

## PartA-พื้นฐานการประกาศตัวแปรและกำหนดค่า (Declaration and Initialization)
[1.Declare String Variables](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables)
```js
var myFirstName = "Chanwit";
var myLastName = 'Pansila';
```


[2.Escaping Literal Quotes in StringsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escaping-literal-quotes-in-strings)
```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
```

[3.Quoting Strings with Single Quotes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/quoting-strings-with-single-quotes)
```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

[4.Escape Sequences in Strings](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings)
```js
var myStr ="FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
```

## PartB-การเชื่อมข้อความ( String Concatenate )

[1.Concatenating Strings with Plus Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator)
```js
var myStr = "This is the start. " + "This is the end." ; // Change this line
```


[2.Concatenating Strings with the Plus Equals Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
```js
// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```


[3.Constructing Strings with Variables](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/constructing-strings-with-variables)
```js
// Only change code below this line
var myName = "Chanwit";
var myStr = "My name is " + myName + "and I am well!" ;
```
[4.Appending Variables to Strings](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings)
```js
// Change code below this line

var someAdjective = "My Life";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

## PartC-การเข้าถึงและแก้ไขแต่ละตัวอักษร( Access and Mutate )

[1.Find the Length of a StringPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string)
```js
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;
```

[2.Use Bracket Notation to Find the First Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string)
```js
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
```

[3.Use Bracket Notation to Find the Nth Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-character-in-a-string)
```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
```
[4.Use Bracket Notation to Find the Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-last-character-in-a-string)
```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length -1]; // Change this line
```
[5.Use Bracket Notation to Find the Nth-to-Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)
```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
```

[6.Understand String Immutability](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability)
```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
```
## UseCase
[1.Word Blanks](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/word-blanks)

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "My " + " " + myAdjective + " " + myNoun+ " " + myVerb+ " " + myAdverb + "."; // Change this line
// Only change code above this line
```

