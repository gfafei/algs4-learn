/**
 * selection sort
 * @param arr number[]
 */
const sort = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

module.exports = { sort };
