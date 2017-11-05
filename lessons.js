// Example 2 -- Observable from DOM Events

const clicks = Rx.Observable.fromEvent(document, 'click');
clicks.subscribe(click => console.log(click));

// click around the web page...
// MouseEvent<data>
// MouseEvent<data>
