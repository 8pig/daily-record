Array.prototype.quick = function (){

  const rec = arr => {
    if(arr.length <= 1){
      return arr;
    }
    const left = []
    const right = []
    const mind = arr[0]
    for (let index = 1; index < arr.length; index++) {
      if (mind > arr[index]) {
        left.push(arr[index]);
      } else {
        right.push(arr[index])
      }
    }
    return [...rec(left), mind, ...rec(right)]



  }

  const res = rec(this);
  res.forEach((value, index) => {
    this[index] = value;
  })


  console.log(res);
}

const arr = [5,4,3,2,1,0,100]
arr.quick()