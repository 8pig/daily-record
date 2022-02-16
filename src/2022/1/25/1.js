const set = new Set([2,2,2,1,1,3,3]);
console.log(set);

console.log(Array.from(set));
console.log(set);
let setArr = Array.from(set);
let a = setArr.slice(0, 2);
let b = setArr.splice(0, 2);
console.log(a);
console.log(setArr);

console.log(b);
console.log(setArr);
