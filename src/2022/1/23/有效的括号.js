const isValid = str => {
  const stack = [];
  for (let index = 0; index < str.length; index++) {
    const p = str[index];
    if(
      (p === '(') ||
      (p === '') ||
      (p === '{')
    ){
        stack.push(p)
    }else {
      const t = stack[stack.length - 1]
    if(
      (t === '(' && p === ')' ) ||
      (t === '[' && p === ']' ) ||
      (t === '{' && p === '}' )
    ){
      stack.pop()
    }else {
      return false;
    }
    }
  }



return stack.length === 0;

}

console.log(isValid('()[]{}'));