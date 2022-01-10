

const color = (t, c) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(c);
    }, t);
  })
}



const p1 = function (){
  return new Promise(resolve => {
    resolve("start")
  }).then(() => {
    return color(2000, 'red')
  }).then(res => {
    console.log(res);
    return color(2000, 'green')
  }).then(res => {
    console.log(res);
    return color(1000, 'yellow')
  }).then(res => {
    console.log(res);
  }).finally(() => {
    p1()
  })
}
p1()


