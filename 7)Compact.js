 function compact(array) {
    return array.reduce((acc, curr)=>{
      if(curr){
        acc.push(curr)
      }
      return acc;
    },[])
  }


