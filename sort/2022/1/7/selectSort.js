Array.prototype.selectSort = function (){
  // 选一个基准值
  const len = this.length;
  for (let j = 0; j < len; j++) {
    let minIndex = j;

    for (let i = j; i < len; i++) {
      if(this[minIndex] > this[i]){
          minIndex = i;
      }
    }
    const temp = this[j];
    this[j] = this[minIndex];
    this[minIndex] = temp;
    
  }


  console.log(this);
}
const arr = [1,5,3,2,3,4, 0];
arr.selectSort()