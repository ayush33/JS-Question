// The main pitfall in this question is invoking the callback function with the correct this, the value of this when the debounced function was called. Since the callback function will be invoked in a timeout, we need to ensure that the first argument to func.apply()/func.call() is the right value. There are two ways to achieve this:

// Use another variable to keep a reference to this and access this via that variable from within the setTimeout callback. This is the traditional way of preserving this before arrow functions existed.
// Use an arrow function to declare the setTimeout callback where the this value within it has lexical scope. The value of this within arrow functions is bound to the context in which the function is created, not to the environment in which the function is called.



// let i = 0;
// function increment() {
//   i++;
// }
// const debouncedIncrement = debounce(increment, 100);

 // t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0

// // t = 50: i is still 0 because 100ms have not passed.

// // t = 100: increment() was invoked and i is now 1.

function debounce(func, wait) {
    let timerId = null;
    
    return function(...args){
      clearTimeout(timerId)
  
      timerId = setTimeout(()=>{
        timerId = null
        func.apply(this, args)
      },wait)
    }
  }

  // Simple Example

  function sayHello() {
    console.log("Hello!");
  }
  
  const debouncedHello = debounce(sayHello, 1000);
  
  // Rapid calls
  debouncedHello();
  debouncedHello();
  debouncedHello();

  //UseCase of Debounce


  // Search Example

  function useDebounce(callback, wait = 400) {
    const debounced = debounce(callback, wait);
    return debounced;
  }

    const handleSearch = useDebounce((value) => {
      console.log("Search:", value);
      // fetchResults(value) ← your API call here
    }, 400);

    handleSearch("aa")
  
    