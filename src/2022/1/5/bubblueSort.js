Array.prototype.bubbleSort = function () {

for (let i = 0; i < this.length; i++) {
  for (let j = 0; j < this.length - 1 - i; j++) {
    if(this[j] > this[j+1]) {
      const temp = this[j];
      this[j] = this[j+1];
      this[j+1] = temp;
      // 一轮后 最大的就在最后
    }
  }

}

  console.log(this);
}
const test = [2,5,1,2,8,9,0];
test.bubbleSort()
