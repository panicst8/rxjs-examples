// Example 5 -- Observable Time Interval

const interval = Rx.Observable.interval(1000);
interval.subscribe(i => print(i));

// 0
// 1
// every second for eternity...
