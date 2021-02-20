import Utils from '../utils'

export function shell(a) {
  const n = a.length
  let h = 1
  while (h < n / 3)  h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && a[j] < a[j - h]; j -= h) {
        Utils.swap(a, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}

function sink(a, k, n) {
  while(k <= Math.floor(n / 2)) {
    let j = k * 2
    if (j < n && a[j - 1] < a[j]) j++
    if (a[k - 1] > a[j - 1]) break
    Utils.swap(a, k - 1, j - 1)
    k = j;
  }
}
export function heap(a) {
  let n = a.length
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    sink(a, i, n)
  }
  while(n > 1) {
    Utils.swap(a, 0, n - 1)
    n--
    sink(a, 1, n)
  }
}
