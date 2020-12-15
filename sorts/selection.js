const Utils = require('../utils');
const chalk = require('chalk');
const assert = require('assert').strict;

const options = {
  draw: true
}

const draw = function (arr, i, min) {
  const len = arr.length;
  for (let k = 0; k < len; k++) {
    let color
    if (k === min) {
      color = chalk.red
    } else if (k < i) {
      color = chalk.gray
    } else {
      color = chalk.black
    }
    process.stdout.write(color(arr[k] + '\t'));
  }
  process.stdout.write('\n')
}
/**
 * selection sort
 * @param arr number[]
 * @returns number[]
 */
const sort = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (options.draw) draw(arr, i, min)
    Utils.swap(arr, i, min);
  }
  return arr;
}

const main = function () {
  const array = Utils.getRandomIntegers({
    min: 0,
    max: 100,
    count: 10
  });
  sort(array);
  assert(Utils.isSorted(array))
}
main();
module.exports = { sort };
