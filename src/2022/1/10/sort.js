Array.prototype.bubbleSort = function () {

    for (let j = 0; j < this.length; j++) {
        for (let i = 0; i < this.length - 1; i++) {
            if(this[i] > this[i + 1]) {
                const temp = this[i+1];
                this[i + 1] = this[i];
                this[i] = temp;
            }
        }

    }
    console.log(this);
}
const arr = [5,4,3,0,1]
// arr.bubbleSort()
// select  假设第一个最小
Array.prototype.selectSort = function () {

    for (let j = 0; j < this.length; j++) {
        let mind = j;
        for (let i = j; i < this.length; i++) {
            if(this[mind] > this[i]) {
                mind = i;
            }
        }
        let tem = this[mind];
        this[mind] = this[j];
        this[j] = tem;

    }
    console.log(this);

}
// arr.selectSort();

Array.prototype.quickSort = function () {

    const rec = arr => {
        if (arr.length <= 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < min){
                left.push(arr[i])

            }else {
                right.push(arr[i])
            }
        }
        return [...rec(left), min, ...rec(right)]
    }
    const res = rec(this);

    res.forEach((n, i) => {
        this[i] = n;
    })
    console.log(res, 111);
}
const ar1 = [9,8,6,4,2,1,10]
ar1.quickSort()
