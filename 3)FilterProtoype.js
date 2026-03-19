
// Filter

/**
 * 
 Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.
For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).
Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.
 */

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]


Array.prototype.myFilter = function (callbackFn, thisArg) {
    const result = [];
  
    for(let i=0; i<this.length; i++){
      if( Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)){      //this, curr value, curr index, arr
         result.push(this[i])
      }
    }
    return result
  };


  // Reduce


/**
 * Array.prototype.reduce is a way of "reducing" elements in an array by calling a
 *  "reducer" callback function on each element of the array in order, passing in the 
 * return value from the calculation on the preceding element. The final result of running the reducer 
 * across all elements of the array is a single value.
 */
[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10

Array.prototype.myReduce = function (callbackFn, initialValue) {

    const noInitialValue = initialValue == undefined;
    let len = this.length;
     if(noInitialValue && len===0){
        throw new TypeError('Reduce of empty array with no initial value'); 
    }
  
    let acc = noInitialValue ? this[0] : initialValue
    let index = noInitialValue ? 1 : 0
  
     for(let i=index; i<len; i++){
      if(Object.hasOwn(this, i)){
        acc = callbackFn(acc, this[i], i, this)
      }
     }
       return acc;
  };