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
console.log(isEveryoneHere({
  Alan: {
    age: 27,
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
}));