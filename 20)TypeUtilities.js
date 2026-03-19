
/**
 * Many interview questions involve recursion of objects that can hold 
 * values of different types and how to handle each value type differs 
 * according to the type (e.g. different code is needed to iterate over an 
 * array vs an object). Knowledge of handling the JavaScript types is crucial
 *  to solving questions like Deep Clone and Deep Equal.
 */
export function isArray(value) {
    return Array.isArray(value)
  }
  
  export function isFunction(value) {
     return typeof value === 'function'
  }
  
  export function isObject(value) {
     if (value == null) {
      return false;
    }
    const type = typeof value;
    return type === 'object' || type === 'function';
  }
  
  export function isPlainObject(value) {
     if (value == null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
  }