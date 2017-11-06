// Example 28 -- BehaviorSubject - holds one value. When it is subscribed
//               it emits the value immediately. A Subject doesn't hold
//               a value.

const subject = new Rx.BehaviorSubject('initial value');

subject.subscribe(x => console.log(x));

subject.next('next value');
