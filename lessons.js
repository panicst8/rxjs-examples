// Example 15 -- first() operator

const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2);

numbers.first().subscribe(n => print(n));
