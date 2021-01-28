import Utils from '../utils'

export const shell = (array) => {
  let len = array.length
  let h = 1;
  while (h < len / 3) h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && array[j] < array[j - h]; j-=h) {
        Utils.swap(array, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}


