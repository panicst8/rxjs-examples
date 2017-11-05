// Example 7 -- Cold Observable Example

const cold = Rx.Observable.create(observer => {
   observer.next(Math.random());
});

cold.subscribe(a => print(`Subscriber A: ${a}`));
cold.subscribe(b => print(`Subscriber B: ${b}`));

// Subscriber A: 0.2298339030
// Subscriber B: 0.9720023832
