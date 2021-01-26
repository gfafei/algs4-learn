import Utils from '../utils'

export const insertion = (array) => {
    const len = array.length
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            Utils.swap(array, j, j - 1)
        }
    }
}

const merge = (array, aux, lo, mid, hi) => {
    for (let k = lo; k <= hi; k++) {
        aux[k] = array[k]
    }
    let i = lo, j = mid + 1;
    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            array[k] = aux[j++]
        } else if (j > hi) {
            array[k] = aux[i++]
        } else if (aux[i] < aux[j]) {
            array[k] = aux[i++]
        } else {
            array[k] = aux[j++]
        }
    }
}
const _sort = (array, aux, lo, hi) => {
    if (lo >= hi) return
    const mid = lo + Math.floor((hi - lo) / 2)
    _sort(array, aux, lo, mid)
    _sort(array, aux, mid + 1, hi)
    merge(array, aux, lo, mid, hi)
}

export const mergeSort = (array) => {
    const len = array.length
    const aux = []
    _sort(array, aux, 0, len - 1)
}
