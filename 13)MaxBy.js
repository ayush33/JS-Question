maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }

maxBy([1, 2], (o) => -o); // => 1

maxBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined



 function maxBy(array, iteratee) {
  
    let maxBy;
    let result;
     for(const item of array){
      let value = iteratee(item);
      if(value!=null && maxBy===undefined){
        result = item;
        maxBy = value
      }
      if(value!=null && value>maxBy){
        maxBy = value
        result = item;
      }
    }
    return result;
  }
  

  // same we can do for minby