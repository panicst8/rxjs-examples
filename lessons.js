// Example 16 -- last() operator

const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2);

numbers.last().subscribe(n => print(n));
