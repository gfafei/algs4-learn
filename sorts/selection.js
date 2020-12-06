const Utils = require('../utils');
/**
 * selection sort
 * @param arr number[]
 * @returns number[]
 */
const sort = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        Utils.swap(arr, i, j);
      }
    }
  }
  return arr;
}

module.exports = { sort };
