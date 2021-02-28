import Utils from '../utils'

export function shell(a) {
  const n = a.length
  let h = 1
  while (h < n / 3) h = 3 * h + 1
  while (h >= 1) {
    for(let i = h; i < n; i++) {
      for (let j = i; j >= h && a[j] < a[j - h]; j -= h) {
        Utils.swap(a, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}

export function quick(a) {
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

export function heap(a) {
  let n = a.length
  for (let k = Math.floor(n / 2); k >=1; k--) {
    sink(a, k, n)
  }
  while(n > 1) {
    swap(a, 1, n)
    n--
    sink(a, 1, n)
  }
}

function sink(a, k, n) {
  while (k <= Math.floor(n / 2)) {
    let j = k * 2
    if (j < n && less(a, j, j + 1)) j++
    if (!less(a, k, j)) break
    swap(a, k, j)
    k = j
  }
}
function swap(a, i, j) {
  const swap = a[i - 1]
  a[i - 1] = a[j - 1]
  a[j - 1] = swap
}

function less(a, i, j) {
  return a[i -1] < a[j - 1]
}
