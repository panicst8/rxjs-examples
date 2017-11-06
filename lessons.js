// Example 25 -- Catch - Handle errors gracefully

const observable = Rx.Observable.create(observer => {
   observer.next('good');
   observer.next('great');
   observer.next('grand');
   throw 'catch me!';
   observer.next('wonderful');
});

observable.catch(err => print(`Error caught: ${err}`)).subscribe(val => console.log(val));

// good
// great
// grand
// Error caught: catch me!
