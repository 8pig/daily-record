Array.prototype.bubbleSort = function (){
  const len = this.length
  let flag = true;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - 1 - j; i++) {
      if (this[i] > this[ i + 1]) {
        const temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        flag = false;
      }

    }
    if(flag){
      break;
    }
  }

  console.log(this);
}
const arr = [1,5,3,2,3,4];
arr.bubbleSort()