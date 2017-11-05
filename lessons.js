// Example 9 -- Hot Observable Example

const x = Math.random();

const hot = Rx.Observable.create(observer => {
   observer.next(x);
});

hot.subscribe(a => print(`Subscriber A: ${a}`));
hot.subscribe(b => print(`Subscriber B: ${b}`));

// Subscriber A: 0.312580103
// Subscriber B: 0.312580103
