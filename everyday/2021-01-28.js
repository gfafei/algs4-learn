import Utils from '../utils'

const partition = (array, lo, hi) => {
  let i = lo, j = hi + 1
  let v = array[lo]
  while (true) {
    i++
    while (array[i] < v) {
      if (i === hi) break
      i++
    }
    j--
    while (array[j] > v) {
      if (j === lo) break
      j--
    }
    if (i >= j) break
    Utils.swap(array, i, j)
  }
  Utils.swap(array, lo, j)
  return j

  // let i = lo
  // let j = hi + 1
  // let v = array[lo]
  // while (true) {
  //   // while(array[++i] < v) if (i === hi) break
  //   i++
  //   while(array[i] < v) {
  //     if (i === hi) break
  //     i++
  //   }
  //   // while(array[--j] > v) if (j === lo) break
  //   j--
  //   while (array[j] > v) {
  //     if (j === lo) break
  //     j--
  //   }
  //   if (i >= j) break
  //   Utils.swap(array, i, j)
  // }
  // Utils.swap(array, lo, j)
  // return j
}
const sort = (array, lo, hi) => {
  if (lo >= hi) return;
  const j = partition(array, lo, hi);
  sort(array, lo, j - 1)
  sort(array, j + 1, hi)
}

export const quickSort = (array) => {
  sort(array, 0, array.length - 1)
}

export const shellSort = (array) => {
  const len = array.length
  let h = 1
  while (h < Math.floor(len / 3)) h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
        Utils.swap(array, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}
