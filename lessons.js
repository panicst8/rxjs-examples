// Example 4 -- Observable Timer

const timer = Rx.Observable.timer(1000);
timer.subscribe(done => print('ding!!!'));
