// Example 19 -- SwitchMap - Get value from Observable A, then emit Observable B

const clicks = Rx.Observable.fromEvent(document, 'click');
clicks
   .switchMap(click => {
      return Rx.Observable.interval(500);
   })
   .subscribe(i => print(i));
