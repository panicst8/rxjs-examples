// Example 12 -- Do - Just do it

/*

 The do operator allows you to run code at any point in the
 Observable, without producing side effects on the emitted 
 values. This is handy for debugging or for any situation 
 where you want to run code outside of the Observable scope.

*/

const names = Rx.Observable.of('Simon', 'Garfunkle');
names
   .do(name => print(`original value: ${name}`))
   .map(name => name.toUpperCase())
   .do(name => print(`uppercase value: ${name}`))
   .subscribe();
