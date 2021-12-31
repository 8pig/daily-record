// /*
// *  找到数组中的最小值 把他放在第一位
// *   接着找第二小的值  放到第二位
// *   执行n-1轮
// *
// * */
//
// /*
//      选择排序   是先假设0个是最小的
//      然后一个一个比 大了就换位置
// */
//
// // 先实现第一个功能
//
// Array.prototype.selectSort = function () {
//
//   let minIndex = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[minIndex] > this[i]) {
//         minIndex = i;
//     }
//   }
//   console.log(minIndex);
//   // 当前最小值的索引
// }
// // 第二步  循环整体
// Array.prototype.selectSort = function () {
//
//   let minIndex = 0;
//   for (let j = 0; j < this.length; j++) {
//     if (this[minIndex] > this[j]) {
//       minIndex = j;
//     }
//   }
//   let temp = this[0]
//   this[0] = this[minIndex];
//   this[minIndex] = temp;
//   console.log(this);
//   // 这一轮 最小的在第一个    minIndex 是最小的索引
// }
//
// // 实现N-1轮
Array.prototype.selectSort = function () {
  for (let i = 0; i < this.length; i++) {
    let minIndex = i;
    for (let j = i; j < this.length; j++) {
      if (this[minIndex] > this[j]) {
        minIndex = j;
      }
    }
    let temp = this[i]
    this[i] = this[minIndex];
    this[minIndex] = temp;
  }
  console.log(this);

}


const arr = [10, 20, 9 , 0 ,1 ,23, 15]
arr.selectSort()
