// Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// // Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// // Flattens recursively.
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

// Explaination

// push() : The push() method adds one or more elements to the end of an array and returns the new length of the array. (MDN)

// var arr1 = [‘a’, ‘b’, ‘c’];
// var arr2 = [‘d’, ‘e’, ‘f’];
// var arr3 = arr1.push(arr2);
// console.log(arr3); // 4
// console.log(arr1); // [“a”, “b”, “c”, [“d”, “e”, “f”]]

// concat() : The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. (MDN)

// var arr1 = [‘a’, ‘b’, ‘c’];
// var arr2 = [‘d’, ‘e’, ‘f’];
// var arr3 = arr1.concat(arr2);
// console.log(arr3); //[“a”, “b”, “c”, “d”, “e”, “f”]


export default function flatten(value) {
  return value.reduce((acc, curr) => {
    return Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr);
  }, []);
}
