# Basic DataStructure : Object

# Prerequisite 
- basic array


[1.Add Key-Value Pairs to JavaScript Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-key-value-pairs-to-javascript-objects)
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);
```

[2.Modify an Object Nested Within an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object)
```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
```


[3.Access Property Names with Bracket Notation](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-property-names-with-bracket-notation)
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  if(foods[scannedItem]){
    return foods[scannedItem]
  }
  // Only change code above this line
}

console.log(checkInventory("apples"));
```


[4.Use the delete Keyword to Remove Object Properties](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-the-delete-keyword-to-remove-object-properties)
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges
delete foods.plums
delete foods.strawberries
// Only change code above this line

console.log(foods);
```


[5.Check if an Object has a Property](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property)
```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  let check = "";
  let arr = ["Alan", "Jeff", "Sarah", "Ryan"]
  for (let element of arr ) {
    // console.log(!(element in userObj))
    if(!(element in userObj)) {
      check = false;
      break;
    } else {
      check = true;
    }
  }
  return check;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

```


[6.Iterate Through the Keys of an Object with a for...in Statement](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement)
```js
function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let i in usersObj) {
    if(usersObj[i]["online"] === true) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}
```

[7.Generate an Array of All Object Keys with Object.keys()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys)
```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```


[8.Modify an Array Stored in an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object)
```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend)
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```
