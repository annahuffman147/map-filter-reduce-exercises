function onlyEven (array) {
  return array.filter(function(value){
    if (value % 2 == 0){
      return true
    }
  })
};

function onlyOneWord (array) {
  return array.filter (function(value){
    var splitValue = value.split(' ')
    return (splitValue.length === 1)
  })
};

function positiveRowsOnly (array) {
  return array.filter(function(value) {
    for (var i = 0; i < value.length; i++) {
      return (value[0] > 0 && value[1] > 0 && value[2] > 0)
    }
  })
};

function allSameVowels (array) {
  return array.filter(function(value, index, array) {

  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
