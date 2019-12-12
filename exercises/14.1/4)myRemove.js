let assert = require('assert')

function myRemove(arr, item) {
  var ret = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== item) {
      ret.push(arr[i]);
    }
  }

  return ret;
}

// implemente seus testes aqui
