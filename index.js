const Selection = require('./sorts/selection');
const Insertion = require('./sorts/insertion');
const Utils = require('./utils');
const assert = require('assert').strict;

const array = Utils.getRandomIntegers({
  min: 0,
  max: 100,
  count: 10
});

Insertion.sort(array);

assert(Utils.isSorted(array));

Utils.show(array);
