// Example 17 -- throttle and debounce

const mouseEvents = Rx.Observable.fromEvent(document, 'mousemove');
mouseEvents.throttleTime(100).subscribe(x => console.log(`throttle -> ${x.clientX}, ${x.clientY}`));

// MouseEvent<data>
// take values every 10th of second...

mouseEvents.debounceTime(1000).subscribe(x => console.log(`debounce -> ${x.clientX}, ${x.clientY}`));

// wait 1 second without change before taking value
// MouseEvent<data>
