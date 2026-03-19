const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  
  fromPairs(pairs); // => { a: 1, b: 2, c: 3 }


  export default function fromPairs(pairs) {
    let obj = {};
    for( const [key, values] of pairs){
      obj[key] = values
    }
    return obj;
  }