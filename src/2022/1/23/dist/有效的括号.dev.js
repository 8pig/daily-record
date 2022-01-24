"use strict";

var isValid = function isValid(str) {
  var stack = [];

  for (var index = 0; index < str.length; index++) {
    var p = str[index];

    if (p === '(' || p === '' || p === '{') {
      stack.push(p);
    } else {
      var t = stack.shift();

      if (t === '(' && p === ')' || t === '[' && p === '}' || t === '{' && p === '}') {
        console.log(123);
      }
    }
  }

  return stack;
};

console.log(isValid('()[]{}'));