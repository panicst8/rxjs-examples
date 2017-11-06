// Example 32 -- Multicast - Share values, not side effects

const observable = Rx.Observable.fromEvent(document, 'click');

const clicks = observable.do(_ => print('SIDE EFFECT!!'));

const subject = clicks.multicast(() => new Rx.Subject());

const subA = subject.subscribe(c => print(`Sub A: ${c.timeStamp}`));
const subB = subject.subscribe(c => print(`Sub B: ${c.timeStamp}`));

subject.connect();

// SIDE EFFECT!!
// Sub A: 2687.62
// Sub B: 2687.62

// SIDE EFFECT!!
// Sub A: 4295.11
// Sub B: 4295.11
