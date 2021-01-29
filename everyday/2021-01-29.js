import Utils from '../utils'

export function insertion(a) {
  const n = a.length
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && a[j] < a[j - 1]; j--) {
      Utils.swap(a, j, j - 1)
    }
  }
}

export function shell(a) {
  const n = a.length
  let h = 1
  while (h < n / 3) h = h * 3 + 1
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && a[j] < a[j - h]; j -= h) {
        Utils.swap(a, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}

function partition(array, lo, hi) {
  let i = lo + 1, j = hi
  let v = array[lo]
  while (true) {
    while (array[i] < v) {
      if (i === hi) break
      i++
    }
    while (array[j] > v) {
      if (j === lo) break
      j--
    }
    if (i >= j) break
    Utils.swap(array, i, j)
    i++
    j--
  }
  Utils.swap(array, lo, j)
  return j
}
function sort(a, lo, hi) {
  if (lo >= hi) return;
  const j = partition(a, lo, hi)
  sort(a, lo, j - 1)
  sort(a, j + 1, hi)
}
export function quickSort(a) {
  sort(a, 0, a.length - 1)
}
