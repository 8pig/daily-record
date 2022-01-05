Array.prototype.selectSort = function () {
    let minIndex = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i] < this[minIndex]) {
            minIndex = i;
        }
    }
    console.log(minIndex);
}
const arr = [5,2,4,7,8,1,0];
arr.selectSort();
