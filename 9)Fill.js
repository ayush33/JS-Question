function fill(array, value, start = 0, end = array.length) {
    const length = array.length;
    if(start<0){
      start = -start>length ? 0 : length+start
    }
    
    if(end<0){
      end = end+length
    }
    for (let i = start; i < Math.min(end, length); i++) {
      array[i] = value;
    }
    return array
  }

  fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]

// out of bounds indices
fill([4, 6, 8, 10, 12], '*', 1, 8); // [4, '*', '*', '*', '*']
fill([4, 6, 8, 10, 12], '*', 8, 10); // [4, 6, 8, 10, 12]

// negative but within bounds indices
fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]

// negative out of bounds indices
fill([4, 6, 8, 10, 12], '*', -10, 2); // ['*', '*', 8, 10, 12]
fill([4, 6, 8, 10, 12], '*', -10, -8); // [4, 6, 8, 10, 12]



/**
 *  if -start > len  then 0 otherwise start + len
 *  if end < 0 no loop after end + len 
 */