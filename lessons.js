// Example 6 -- Observable of Static Values

const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, { cool: 'stuff' });
mashup.subscribe(val => print(val));

// anything
// you,want
// 23
// true
// [object Object]
