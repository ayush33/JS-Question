function chunk(array, size = 1) {

    if(!Array.isArray(array) || size<1){
      return array;
    }
    let result = [];
    for(let i=0; i<array.length; i+=size){
      let chunk = array.slice(i, i+size)
      result.push(chunk)
    }
    return result
  }

  chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]