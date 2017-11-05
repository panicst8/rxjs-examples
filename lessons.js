// Example 3 -- Observable from Promise

const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('resolved!');
   }, 1000);
});
const obsvPromise = Rx.Observable.fromPromise(promise);
obsvPromise.subscribe(result => console.log(result));
