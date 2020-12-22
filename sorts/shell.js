const Utils = require('../utils')
const assert = require('assert').strict
const { PerformanceObserver, performance } = require('perf_hooks');
const sort = function(arr) {
  const len = arr.length
  let h = 1
  while (h < Math.floor(len / 3)) h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j--) {
        Utils.swap(arr, j, j-h)
      }
    }
    h = Math.floor(h / 3)
  }
  return arr
}

const main = function () {
  const array = Utils.getRandomIntegers({
    min: 0,
    max: 1000000,
    count: 100
  });
  const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks();
  });
  obs.observe({ entryTypes: ['measure'] });
  performance.mark('A');
  sort(array)
  performance.measure('A to Now', 'A');
  assert(Utils.isSorted(array))
}

main()

module.exports = { sort }
