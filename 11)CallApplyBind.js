

// Apply using call
Function.prototype.myApply = function (thisArg, argArray) {
    return this.call(thisArg, ...argArray);
 };


//Call using apply
Function.prototype.myCall = function (thisArg, ...argArray) {
    return this.apply(thisArg, [ ...argArray])
  };

  


  // Bind
  /**
   * The Function.prototype.bind() method creates a new function that,
   *  when called, has its this keyword set to the provided value, with 
   * a given sequence of arguments preceding any provided when the new function is called.
   */

  const john = {
    age: 42,
    getAge: function () {
      return this.age;
    },
  };
  
  const unboundGetAge = john.getAge;
  console.log(unboundGetAge()); // undefined
  
  const boundGetAge = john.getAge.myBind(john);
  console.log(boundGetAge()); // 42

  Function.prototype.myBind = function (thisArg, ...argArray) {
    const originalMethod = this;
   return function (...args){
     return originalMethod.apply(thisArg, [...argArray, ...args])
   }
 };
  