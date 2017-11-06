// Example 29 -- distinctUntilChanged - only output distinct values,
//               based on the last emitted value

const myArrayWithDuplicatesInARow = Rx.Observable.from([1, 1, 2, 2, 3, 1, 2, 3]);

const distinctSub = myArrayWithDuplicatesInARow
   .distinctUntilChanged()
   .subscribe(val => print(`Distinct Sub: ${val}`));
