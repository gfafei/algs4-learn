import Utils from '../utils'

export function shell(a) {
  const n = a.length
  let h = 1
  while (h < n / 3) h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && a[j] < a[j - h]; j -= h) {
        Utils.swap(a, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}
function partition(a, lo, hi) {
  let v = a[lo]
  let i = lo + 1
  let j = hi
  while (true) {
    while (a[i] < v) {
      if (i === hi) break
      i++
    }
    while (a[j] > v) {
      if (j === lo) break
      j--
    }
    if (i >= j) break
    Utils.swap(a, i, j)
    i++
    j--
  }
  Utils.swap(a, lo, j)
  return j
}
function sort(a, lo, hi) {
  if (lo >= hi) return
  const j = partition(a, lo, hi)
  sort(a, lo, j - 1)
  sort(a, j + 1, hi)
}
export function quickSort(a) {
  sort(a, 0, a.length -  1)
}
