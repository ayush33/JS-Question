/**
 * The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

If the iterable passed is empty, the promise returned will be forever pending.

If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race() will resolve to the first of these values found in the iterable.
 */

const p0 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 100);
  });
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Err!');
    }, 400);
  });
  
  await promiseRace([p0, p1]); // 42


// first way
function promiseRace(iterable) {
    return new Promise((resolve, reject)=>{
      if(iterable.length === 0){
        return
      }
  
      iterable.forEach(async (item)=>{
        try{
          const result = await item
          resolve(result)
        }catch(err){
          reject(err)
        }
      })
    })
  }

  // second way
  export default function promiseRace(iterable) {
    return new Promise((resolve, reject) => {
      if (iterable.length === 0) {
        return;
      }
  
      iterable.forEach((item) =>
        // Incorrect to use `catch()`, use onReject in `then()`.
        Promise.resolve(item).then(resolve).catch(reject),
      );
    });
  }