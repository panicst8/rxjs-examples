// Example 12 -- Map - Control the Emitted Values

const jsonString = '{"type":"dog", "breed": "pug"}';
const apiCall = Rx.Observable.of(jsonString);

apiCall.map(json => JSON.parse(json)).subscribe(obj => {
   print(obj.type);
   print(obj.breed);
});

// emit as JS object, rather than JSON string
