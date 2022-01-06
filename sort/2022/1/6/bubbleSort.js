Array.prototype.bubbleSort = function () {
  const len = this.length;
  for (let j = 0; j < len; j++) {
    
  for (let i = 0; i < len - 1 - j ; i++) {
    if (this[i] > this[i + 1]) {
      const temp = this[i]
      this[i] = this[i + 1]
      this[i+1] = temp
    }
  }
  }
console.log(this);
}
const arr = [5,4,3,2,5,1,0]
arr.bubbleSort();