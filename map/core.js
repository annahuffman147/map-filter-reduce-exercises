// function multiplyBy10 (array) {
//   return array.map(function(item) {
//     return item * 10
//   })
// };

function multiplyBy10 (array) {
  return array.reduce(function(prev, curr, ind, arr) {
    var newValue = curr * 10;
    prev.push(newValue)
    return prev
  }, [])
};


function shiftRight (array) {
  return array.map (function(item, index, array){
    var newArray
    if (index === 0){
      return array[2];
    }
    if (index === 1){
      return array[0]
    }
    if (index === 2){
      return array[1]
    }
  })
};

function onlyVowels (array) {
 return array.map(function (word){
    var letterArray = word.split('').filter (function(letter){
    var vowels = 'aeiou';
    return (vowels.indexOf(letter)>= 0)
   })
   return letterArray.join('')
 })
};

function doubleMatrix (array) {
  return array.map(function(item, index, array){
    return item.map(function(item){
      return item * 2
    })
  })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
