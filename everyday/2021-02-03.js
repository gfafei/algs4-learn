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
  Utils.swap(a, lo, j)
  return j
}
