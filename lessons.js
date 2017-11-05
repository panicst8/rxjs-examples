// Example 10 -- Converting Cold Observable to Hot

/*

 But how do we make an already cold observable hot? We can
 make a cold Observable hot by simply calling publish() on
 it. This will allow the subscribers to share the same values
 in realtime. To make it start emitting values, you call connect()
 after the subscription has started.

*/

const cold = Rx.Observable.create(observer => {
   observer.next(Math.random());
});

const hot = cold.publish();

hot.subscribe(a => print(`Subscriber A: ${a}`));
hot.subscribe(b => print(`Subscriber B: ${b}`));

hot.connect();

/// Subscriber A: 0.7122882102
/// Subscriber B: 0.7122882102
