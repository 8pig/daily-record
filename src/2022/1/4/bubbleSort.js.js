/*
    冒泡
    相邻的两个 对比
    第N 比n+1 大就换位置
*/


Array.prototype.bubbleSort = function () {

    // 比较到length - 1 个
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if(this[j] > this[j + 1]){
                const temp = this[j];

                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    console.log(this)
}

arr.bubbleSort();
