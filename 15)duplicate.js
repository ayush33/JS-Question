uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]

// using set
 function uniqueArray(array) {
  let set = new Set();
  array.forEach(item=>{
    set.add(item);
  })
  return Array.from(set)
}


// using map
function uniqueArray(array) {

    let map = new Map()
    let result = []
    array.forEach(item=>{
        map.set(item, map.get(item) || 0 + 1)
    })
    for(const [key, value] of map){
        if(value === 1){
            result.push(key)
        }
    }
    return result
  }

function uniqueArray(array) {
    const count = new Map();
  
    for (const item of array) {
      count.set(item, (count.get(item) || 0) + 1);
    }
  
    return array.filter(item => count.get(item) === 1);
  }


  /**
   * Loop in map
   */
  for(const [key, value] of map){
    if(value === 1){
        result.push(key)
    }
}

/**
 * set to array
 */
return Array.from(set)