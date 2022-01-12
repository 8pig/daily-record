Array.prototype.quickSort = function () {

  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mind = arr[0];

    // 因为已经选了mind 所以从 1 开始迭代
    for (let index = 1; index < arr.length; index++) {
      if (arr[index] < mind) {
        left.push(arr[index]);
      } else {
        right.push(arr[index]);
      }
    }
    return [...rec(left), mind, ...rec(right)];
  };

  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });

  console.log(this);
};
const arr = [1, 5, 3, 2, 3, 4];
arr.quickSort();
