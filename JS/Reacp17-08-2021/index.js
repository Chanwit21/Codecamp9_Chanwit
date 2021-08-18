const func1 = (c) => {
  console.log('Hello', c);
};

const func2 = (cb) => {
  let m = 'This is a book';
  console.log('In Fucn2');
  console.log('--------------------------');
  cb(m);
  console.log('--------------------------');
};

// func2(() => func1('CC9 So Cool'));

const func3 = (c) => {
  console.log('Hola', c);
};

// func2(func1);

func2((y) => func3(y));
