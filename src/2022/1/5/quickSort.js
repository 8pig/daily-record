Array.prototype.quickSort = function () {


  const rec = (arr) => {


    if(arr.length <= 1){
      return arr;
    }

    const left =[];
    const right = [];
    const mind  = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < mind){
        left.push(arr[i])
      }else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mind, ...rec(right)]
  }
  const res = rec(this);

  res.forEach((n, i) => {
    this[i] = n;
  })
  console.log(this);
}
const ar1 = [2, 4, 5, 3, 1, 5];
ar1.quickSort()