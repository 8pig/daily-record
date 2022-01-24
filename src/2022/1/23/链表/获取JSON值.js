let json = {
  a: {b: {c: 1}},
  b: {b: {c: 1}}
}
const path = ['a', 'b', 'c'];

let index = 0;


// for (let i = 0; i < path.length + 1; i++) {
//   if(json[path[i]]){
//     json = json[path[i]]
//   }else {
//     console.log(json);
//   }
//
// }
let p = json;
path.forEach(key => {

  p = p[key]
})
console.log(p);
// while(index < path.length) {
//
//   if(json[path[index]]){
//     index ++;
//   }else{
//     console.log(json[path[index -1]]);
//   }
// }
