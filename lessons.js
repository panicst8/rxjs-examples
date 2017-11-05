// Example 11 -- Map - Control the Emitted Values

const numbers = Rx.Observable.of(10, 100, 1000);

numbers.map(num => Math.log(num)).subscribe(x => print(x.toFixed(1)));

// 2.3
// 4.6
// 6.9
