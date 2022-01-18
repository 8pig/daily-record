const Dep = {
  clientList: {},
  listen (key, fn) {
    (this.clientList[key] || (this.clientList[key] = [])).push(fn);

  },
  trigger () {
    let fns = Array.prototype.call(arguments)
    if(!fns || fns.length === 0) {
      return false;
    }
    fns.forEach((value, index, array) => {
      value.apply(this, arguments)
    })
  }
}