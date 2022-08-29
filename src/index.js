import "./styles.css";

class MinStack {
  constructor() {
    this.minValue = [];
    this.stack = [];
  }
  push(val) {
    if (
      this.minValue.length === 0 ||
      val <= this.minValue[this.minValue.length - 1]
    )
      this.minValue.push(val);
    this.stack.push(val);
  }
  pop() {
    var val = this.stack.pop();
    if (val === this.minValue[this.minValue.length - 1]) {
      this.minValue.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minValue[this.minValue.length - 1];
  }
}
module.exports = MinStack;
