const { sum, subtract, multiply } = require("../index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtracts 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiplies 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
