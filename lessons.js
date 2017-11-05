// Example 21 -- TakeWhile - Get values while the conditions are right

const names = Rx.Observable.of('Sharon', 'Sue', 'Sally', 'Steve');
names
   .takeWhile(name => name != 'Sally')
   .finally(() => console.log('Complete! I found Sally'))
   .subscribe(i => console.log(i));
