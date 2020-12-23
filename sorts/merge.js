const Utils = require('../utils')
const assert = require('assert').strict
const merge = function(arr, aux, lo, mid, hi) {
  for (let i = lo; i <= hi; i++)
    aux[i] = arr[i]
  let i = lo, j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = aux[j++]
    } else if (j > hi) {
      arr[k] = aux[i++]
    } else if (aux[i] < aux[j]) {
      arr[k] = aux[i++]
    } else {
      arr[k] = aux[j++]
    }
  }
}

const _sort = function(arr, aux, lo, hi) {
  if (hi <= lo) return
  const mid = lo + Math.floor((hi - lo) / 2)
  _sort(arr, aux, lo, mid)
  _sort(arr, aux, mid + 1, hi)
  merge(arr, aux, lo, mid, hi)
}
const sort = function(arr) {
  const aux = [];
  _sort(arr, aux,0, arr.length - 1)
}

const main = function() {
  const array = Utils.getRandomIntegers({
    min: 0,
    max: 100,
    count: 10
  })
  sort(array)
  // Utils.show(array)
  assert(Utils.isSorted(array))
}
main()

module.exports = { sort }
