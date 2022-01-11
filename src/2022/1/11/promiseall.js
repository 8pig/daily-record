const p = (state, tm) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(state) {
        resolve("succ")
      }
      reject("error")
    }, tm);
  })
}

Promise.all([p(0, 2000), p(1, 1000)]).then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})