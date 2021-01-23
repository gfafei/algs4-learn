const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * max) + min;
}

const getRandomIntegers = function({ min = 0, max = 100000, count = 10 }) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(getRandomInt(min, max))
  }
  return arr;
}

const isSorted = function(array) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}

const show = function(array) {
  for (let i = 0; i< array.length; i++) {
    console.log(`${array[i]} `);
  }
}
const swap = function(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
const getDateStr = function() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
export default {
  getRandomIntegers,
  isSorted,
  show,
  swap,
  getDateStr
}
