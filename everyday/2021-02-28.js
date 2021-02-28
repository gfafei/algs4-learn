import Utils from '../utils';

export function shell(a) {
    const n = a.length
    let h = 1
    while(h < n / 3) h = 3 * h + 1
    while(h >= 1) {
        for(let i = h; i < n; i++) {
            for(let j = i; j >= h && a[j] < a[j - h];j -= h) {
                Utils.swap(a, j, j - h)
            }
        }
        h = Math.floor(h / 3)
    }
}
