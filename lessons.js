// Example 3 -- Observable from Promise

const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('resolved!');
   }, 1000);
});
const obsvPromise = Rx.Observable.fromPromise(promise);
obsvPromise.subscribe(result => print(result));

// wail 1 second...
// resolved!

/*

  You can also convert an observable right back to a promise
  using the toPromise() method

*/
