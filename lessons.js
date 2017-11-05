// Example 12 -- Do - Just do it

const names = Rx.Observable.of('Simon', 'Garfunkle');
names
   .do(name => print(`original value: ${name}`))
   .map(name => name.toUpperCase())
   .do(name => print(`uppercase value: ${name}`))
   .subscribe();
