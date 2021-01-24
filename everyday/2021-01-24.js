import Utils from '../utils'

export function selection(array) {
  const len = array.length
  for (let i = 0; i < len; i ++) {
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[i]) {
        Utils.swap(array, i, j)
      }
    }
  }
}

export function insertion(array) {
  const len = array.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j >= 1 && array[j] < array[j - 1]; j--) {
      Utils.swap(array, j, j - 1)
    }
  }
}

export function shell(array) {
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

//TODO merg
