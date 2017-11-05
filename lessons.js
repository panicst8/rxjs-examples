// Example 8 -- Cold Observable Example

// Some Observables end on their own

const timer = Rx.Observable.timer(2000);

timer.finally(() => print('Timer Complete.')).subscribe();

// wait 2 seconds...
// Timer Complete.

// Some Observables will run forever

const interval = Rx.Observable.interval(1000);

interval.finally(() => print('I will never complete.')).subscribe(x => print(x));

// 0
// 1
// and so on...

// You can turn off the stream by unsubscribing

const subscription = interval
   .finally(x => print('Second Subscription Complete.'))
   .subscribe(x => print('2nd Subscription: ' + x));

setTimeout(() => {
   subscription.unsubscribe();
}, 4000);

// 2nd Subscription: 0
// 2nd Subscription: 1
// 2nd Subscription: 2

// Second Subscription Complete.
