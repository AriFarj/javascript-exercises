const removeFromArray = function(array, ...removedItems) {
  return array.filter(val => !removedItems.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
