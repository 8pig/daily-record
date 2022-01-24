const getArr = (ar1, ar2) => {

  const map = new Map();
  ar1.forEach((value, index, array) => {
    map.set(value, value)
  })
  const stack = []
  ar2.forEach((value, index, array) => {
    if(map.has(value)){
        stack.push(value);
        map.delete(value)
    }
  })
  return stack;
}




console.log(getArr([1,2,3,1,1,2,4], [2,2,4]));