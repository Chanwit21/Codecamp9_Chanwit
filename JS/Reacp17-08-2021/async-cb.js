function show(n, cb) {
  setTimeout(() => {
    console.log(n);
    cb(n + 1);
  }, 1000);
}

show(1, (x) => show(x, (y) => console.log('last is', y)));
