Array.prototype.clear = function() {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;
  return array;
}

const arr = [1,2,3,4,5];

console.log(arr.clear(arr)); // []

