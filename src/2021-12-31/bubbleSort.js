/* 
冒泡排序 
是相邻的两个元素比较
如果n 比 n+1 大 则换位置
如果小则继续 n + 1  和 n+2 比

*/

// 第一轮 比较出的最大的  那么他应该在最后

const arr = [ 10, 15, 12, 1, 0, 3, 5, 4]

Array.prototype.bubbleSort = function () {

  for (let i = 0; i < this.length - 1; i++) {
    if(this[i] > this[i + 1]) {
      const temp = this[i]
      this[i] = this[i + 1]
      this[i + 1] = temp
    }
  }
  console.log(this);
  // 这一步 已经把最大的放到 最后了
}
// arr.bubbleSort()

// 2 下面只需要再嵌套一层循环 全部过比较一遍

Array.prototype.bubbleSort = function () {

  for (let j = 0; j < this.length - 1; j++) {
    for (let i = 0; i < this.length - 1 - j; i++) {
      if(this[i] > this[i + 1]) {
        const temp = this[i]
        this[i] = this[i + 1]
        this[i + 1] = temp
      }
    }
  }
  console.log(this);
}
arr.bubbleSort()


/*
  第二个循环 不需要一直比较下去  因为比较j轮   大小已经确定了 不需要比较 所以直接 -j

*/