const Rx = require('./rxjs');
const pipe = Rx.pipe;
const filter = Rx.operators.filter;

// Example 1

const observable = Rx.Observable.create(observer => {
   observer.next('hello');
   observer.next('world');
});

observable.subscribe(val => console.log(val));
