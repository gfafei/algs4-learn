import Utils from '../utils'

export function quickSort(a) {
  sort(a, 0, a.length - 1)
}
function sort(a, lo, hi) {
  if (lo >= hi) return
  const j = partition(a, lo, hi)
  sort(a, lo, j - 1)
  sort(a, j + 1, hi)
}
function partition(a, lo, hi) {
  const v = a[lo]
  let i = lo + 1
  let j = hi
  while(true) {
    while(a[i] < v) {
      if (i === hi) break
      i++
    }
    while(a[j] > v) {
      if (j === lo) break
      j--
    }
    if (i >= j) break
    Utils.swap(a, i, j)
    i++
    j--
  }
  Utils.swap(a, j, lo)
  return j
}

export function shell(a) {
  let h = 1
  const n = a.length
  while (h < n / 3) h = 3 * h + 1
  while ( h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && a[j] < a[j - h]; j -= h) {
        Utils.swap(a, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}

export function insertion(a) {
  for (let i = 1; i < a.length; i++) {
    for (let j = i; j > 0 && a[j] < a[j - 1]; j--) {
      Utils.swap(a, j, j - 1)
    }
  }
}
