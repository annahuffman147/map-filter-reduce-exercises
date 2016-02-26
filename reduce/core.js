function sum (array) {
  return array.reduce(function(accumulator, value, ind, arr){
    return accumulator + value
  }, 0)
};

function productAll (array) {
  // your code here
};

function objectify (array) {
  return array.reduce(function(accumulator, value, index, array){
    accumulator[value[0]] = value[1];
    return accumulator;
  }, {})
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
