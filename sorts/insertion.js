const Utils = require('../utils');
const chalk = require('chalk');
const assert = require('assert').strict;

const options = {
  draw: true
}
const draw = function(arr, i, j) {
  const len = arr.length;
  for (let k = 0; k < len; k++) {
    let color;
    if (k < j || k > i) {
      color = chalk.gray;
    } else if (k === j) {
      color = chalk.red;
    } else if (k > j && k <= i) {
      color = chalk.black
    }
    process.stdout.write(color(arr[k] + '\t'))
  }
  process.stdout.write('\n');
}
/**
 * insertion sort
 * @param arr number[]
 * @returns number[]
 */
const sort = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let j;
    for (j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      Utils.swap(arr, j, j-1);
    }
    if (options.draw) draw(arr, i, j)
  }
  return arr;
}

const main = function() {
  const array = Utils.getRandomIntegers({
    min: 0,
    max: 100,
    count: 10
  });
  sort(array)
  assert(Utils.isSorted(array))
}
main();
module.exports = { sort };
