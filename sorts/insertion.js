const Utils = require('../utils');
/**
 * insertion sort
 * @param arr number[]
 * @returns number[]
 */
const sort = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      Utils.swap(arr, j, j-1);
    }
  }
  return arr;
}

module.exports = { sort };
