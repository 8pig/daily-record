/*
*  选择排序
*   假设第0 个是最小的   拿他跟后面的比  遇到比他大的 记录索引  一轮下拉 最小的就找到了
* */

const arr = [99,3,12,4,7,5,1,2,0,100,5];
Array.prototype.selectSort = function () {
    for (let i = 0; i < this.length; i++) {
        let minIndex = i;
        for (let j = i; j < this.length; j++) {
            if(this[minIndex] > this[j]){
                minIndex = j
            }
        }
        let temp = this[minIndex];
        this[minIndex] = this[i];
        this[i] = temp;
    }
    console.log(this)
}

arr.selectSort()
