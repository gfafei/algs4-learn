const getRandomInt = function(min = 0, max = 1000000) {
  return Math.floor(Math.random() * max) + min;
}

const getRandomIntegers = function({ min, max, count = 10 }) {
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
module.exports = {
  getRandomIntegers,
  isSorted,
  show
}
