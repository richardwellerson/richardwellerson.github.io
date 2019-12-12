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

assert.strictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ])

/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verique que o array passado por parâmetro não sofreu alterações
Verique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
*/
