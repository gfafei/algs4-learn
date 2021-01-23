import Utils from '../utils'

export const insertion = (array) => {
  const len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      Utils.swap(array, j, j - 1)
    }
  }
}

export function selection (array) {
  const len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[i]) {
        Utils.swap(array, i, j)
      }
    }
  }
}
