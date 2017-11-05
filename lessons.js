// Example 18 -- Scan - Keep a running total

const clicks = Rx.Observable.fromEvent(document, 'click');
clicks
   .map(e => Math.round(Math.random() * 100))
   .do(score => print(`Current Score: ${score}`))
   .scan((totalScore, current) => totalScore + current)
   .subscribe(highScore => print(`High Score: ${highScore}`));
