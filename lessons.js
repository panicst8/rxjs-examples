// Example 24 -- ForkJoin - Merge, wait for completion, emit last values together

// The forkJoin() operator is commonly used to combine multiple
// Promises that must all be resolved before sending data to the UI.

let yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows');
let yang = Rx.Observable.of('jelly', 'cheese', 'unicorns');

yang = yang.delay(2000);

const combo = Rx.Observable.forkJoin(yin, yang);

combo.subscribe(arr => console.log(arr));

// wait 2 seconds...
// rainbows, unicorns
