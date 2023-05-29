const request = fakeRequestPromise('yelp.com/api/coffee');
request.then(() => {
    console.log("Promise resolved!!!")
    console.log("It worked!!!")
}).catch(() => {
    console.log("promise rejected!!!")
    console.log("Oh, No, Error!!!")
})