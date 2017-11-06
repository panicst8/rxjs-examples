// Example 22 -- Buffer - Collect values, then emit as Array

// Buffer is similar to debounce and throttle, but rather than
// filtering out data, it accumulates it into an array, then emits
// the array.

const mouseEvents = Rx.Observable.fromEvent(document, 'mousemove');

mouseEvents
   .map(e => e.timeStamp.toFixed(0))
   .bufferTime(1000)
   .subscribe(batch => console.log(batch));
// second 1 - [...values]
// second 2 - [...values]

mouseEvents.bufferCount(5).subscribe(batch => console.log(batch));
// [...values] length 5
// [...values] length 5
