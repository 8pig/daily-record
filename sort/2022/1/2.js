const invalid = str => {
    if (str % 2 === 1) {
        return false;
    }
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if(
            (c === '(' ) ||
            (c === '{' ) ||
            (c === '<' )
        ){
            arr.push(c)
        }else {
            const t = arr[arr.length - 1]
            if(
                (t === '(' && c === ')') ||
                (t === '{' && c === '}') ||
                (t === '<' && c === '>')
            ){
                arr.pop()
            }
        }
    }

    return arr.length === 0
}

console.log(invalid("{}<>{}"))

//*
//
// 有效的括号
// */
