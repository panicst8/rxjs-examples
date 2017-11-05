// Example 20 -- TakeUntil - Get values until you’re told not to

const interval = Rx.Observable.interval(500);
const notifier = Rx.Observable.timer(2000);
interval
   .takeUntil(notifier)
   .finally(() => print('Complete!'))
   .subscribe(i => print(i));
// 0
// 1
// 2
// Complete!
