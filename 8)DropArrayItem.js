

Concept
/**
 * [1,2,3].slice(0)   // 1 2 3
 * [1,2,3].slice(0,1)  // 1
 * Will not change original Array
 */


//Drop from the last in array
 function dropRightWhile(array, predicate) {
    let index = array.length - 1;
  
    while (index >= 0 && predicate(array[index], index, array)) {
      index--;
    }
  
    return array.slice(0, index + 1);
  }
  
// Example 1: Basic usage
dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 3);
// => [1, 2, 3]
// Explanation: Starts from right (5). 5 > 3 (true, drop). 4 > 3 (true, drop). 3 > 3 (false, stop). Returns [1, 2, 3].

// Example 2: Predicate always true
dropRightWhile([1, 2, 3], (value, _index, _array) => value < 6);
// => []
// Explanation: 3 < 6 (true, drop). 2 < 6 (true, drop). 1 < 6 (true, drop). Returns empty array.

// Example 3: Predicate always false
dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 6);
// => [1, 3, 2, 4, 5]
// Explanation: 5 > 6 (false, stop immediately). Returns the original array slice.

// Example 4: Using the `index` argument
dropRightWhile([1, 2, 3, 4, 5], (_value, index, _array) => index > 2);
// => [1, 2, 3]
// Explanation: Starts at index 4. 4 > 2 (true, drop). Index 3. 3 > 2 (true, drop). Index 2. 2 > 2 (false, stop). Returns [1, 2, 3].

// Example 5: Using the `array` argument
dropRightWhile([10, 11, 12, 4, 5], (value, _index, array) => value < array[1]);
// => [1, 2, 3]
// Explanation: array[1] = 11. 5 < 11 (true, drop). 4 < 11 (true, drop). 12 < 11 (false, stop). Returns [10, 11, 12].



//Drop from the start in array
function dropWhile(array, predicate) {
    let index = 0;
    while(index<array.length && predicate(array[index], index, array)){
      index++;
    }
    console.log(array.slice(index, array.length))
    return array.slice(index, array.length)
  }

  dropWhile([1, 2, 3, 4, 5], (value, _index, _array) => value < 3);
// => [1, 2, 3]
// Explanation: Starts from left (1). 1 < 3 (true, drop). 2 < 3 (true, drop). 3 < 3 (false, stop). Returns [3, 4, 5].

dropWhile([1, 2, 3], (value, _index, _array) => value < 6);
// => []
// Explanation: Starts from left (1). 1 < 6 (true, drop). 2 < 6 (true, drop). 3 < 6 (true, drop). Reaches end. Returns [].

dropWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 6);
// => [1, 2, 3, 4, 5]
// Explanation: Starts from left (1). 1 > 6 (false, stop immediately). Returns [1, 2, 3, 4, 5].

dropWhile([1, 2, 3, 4, 5], (_value, index, _array) => index < 3);
// => [4, 5]
// Explanation: Starts at index 0. 0 < 3 (true, drop). Index 1. 1 < 3 (true, drop). Index 2. 2 < 3 (true, drop). Index 3. 3 < 3 (false, stop). Returns [4, 5].

dropWhile([4, 5, 12, 10, 11], (value, _index, array) => value < array[2]);
// => [12, 10, 11]
// Explanation: array[2] is 12. Starts from left (4). 4 < 12 (true, drop). Index 1 (5). 5 < 12 (true, drop). Index 2 (12). 12 < 12 (false, stop). Returns [12, 10, 11].
