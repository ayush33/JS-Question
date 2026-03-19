sum(1)(); // 1
sum(1)(2)(); // 3
sum(1)(2)(-3)(); // 0

function sum(value) {
    return function(v){
      if(v == undefined){
        return value
      }else{
        return sum(value+v)
      }
    }
  }