// Example 31 Race - take the first observable to emit

const example = Rx.Observable.race(
   //emit every 1.5s
   Rx.Observable.interval(1500),
   //emit every 1s
   Rx.Observable.interval(1000).mapTo('1s won!'),
   //emit every 2s
   Rx.Observable.interval(2000),
   //emit every 2.5s
   Rx.Observable.interval(2500),
);

const subscribe = example.take(1).subscribe(val => console.log(val));

// output: "1s won!"
