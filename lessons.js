// Example 26 -- Retry - Never give up

const observable = Rx.Observable.create(observer => {
   observer.next('good');
   observer.next('great');
   observer.next('grand');
   throw 'catch me!';
   observer.next('wonderful');
});

observable
   .catch(err => print(`Error caught: ${err}`))
   .retry(2)
   .subscribe(val => console.log(val));

// good
// great
// grand
// Error caught: catch me!
// Error caught: catch me!
// Error caught: catch me!
