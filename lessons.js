// Example 23 -- Zip - Combine in unison

// Zip works well when you have complimentary Observables that
// you know have an equal number of values. It will combine the
// values by index location and emit them as a combined array

const yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows');
const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns');
const combo = Rx.Observable.zip(yin, yang);
combo.subscribe(arr => console.log(arr));

// peanut butter, jelly
// wine, cheese
// rainbows, unicorns
