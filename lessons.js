// Example 18 -- Scan - Keep a running total

const clicks = Rx.Observable.fromEvent(document, 'click');
clicks
   .map(e => Math.random() * 100)
   .scan((totalScore, current) => totalScore + current)
   .subscribe(x => print(Math.round(x)));
