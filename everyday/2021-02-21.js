export function heap(a) {
  let n = a.length
  for(let i = Math.floor(n / 2); i >= 1; i--) {
    sink(a, i, n)
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
  return a[i - 1] < a[j - 1]
}
