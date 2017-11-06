// Example 27 -- Subject - An Observable that talks to subscribers

const subject = new Rx.Subject();

const subA = subject.subscribe(val => print(`Sub A: ${val}`));
const subB = subject.subscribe(val => print(`Sub B: ${val}`));

subject.next('Hello');

// Sub A: Hello
// Sub B: Hello

setTimeout(() => {
   subject.next('World');
}, 1000);

// Sub A: World
// Sub B: World
