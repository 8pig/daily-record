// LeetCode237

const delNode = (node, target) => {
  let p = node;
  while(p) {
    par = p;
    if(p.next.val == target){
      p.next = p.next.next;
      break;
    }
    p = p.next;
  }
  console.log(p, 'node');
}


const del2 = node => {
  node.val = node.next.val;
  node.next = node.next.next;
}


const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const d = {val: 'd'}
a.next = b;
b.next = c;
c.next = d;
del2(a.next)
console.log(a);