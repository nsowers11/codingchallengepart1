const MinStack = require("../src/index");

it("expect the minimum in the stack to be -3", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.push(-3);
  const findMin = minStack.getMin();
  expect(findMin).toBe(-3);
});

it("expect the top in the stack to be 0", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.pop();
  const findTop = minStack.top();
  expect(findTop).toBe(0);
});

it("expect the minimum in the stack to be -2", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.pop();
  minStack.top();
  const findMin = minStack.getMin();
  expect(findMin).toBe(-2);
});
