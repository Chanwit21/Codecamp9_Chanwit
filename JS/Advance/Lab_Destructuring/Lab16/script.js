// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b
const q = {
  prop: "Hello",
  prop2: {
    prop2: {
      nested: ["a", "b", "c"],
    },
  },
};
const {
  prop: x,
  prop2: {
    prop2: {
      nested: [, y,],
    },
  },
} = q;
console.log(x)
console.log(y)
