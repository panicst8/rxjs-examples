// Example 14 -- Filter - Use only the Good Stuff

const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2);

numbers.filter(num => num > 0).subscribe(n => print(n));
