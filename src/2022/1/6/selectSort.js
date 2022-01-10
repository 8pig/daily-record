Array.prototype.selectSort = function () {

  for (let j = 0; j < this.length; j++) {
    let minIndex = j;
    for (let i = j; i < this.length; i++) {
      if (this[minIndex] > this[i]) {
        minIndex = i
        // zuixiaode
      }
    }
    const temp = this[minIndex];
    this[minIndex] = this[j]
    this[j] = temp;
  }
  console.log(this);

}
const arr = [5,4,3,1,2,0,44]
arr.selectSort()