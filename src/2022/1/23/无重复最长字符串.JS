const num = s => {
    let l = 0; // 左指针
    let sum = 0; //
    const map = new Map();
    for (let r = 0; r < s.length; r++) {
        if(map.has(s[r])){
            l = map.get(s[r])+1;
        }
        sum = Math.max(sum, r - l + 1);
        map.set(s[r], r);

    }
    return sum;
}
const str = "abcabcbb"
console.log(num(str));
