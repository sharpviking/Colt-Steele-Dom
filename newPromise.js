fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('It worked!!!')
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log('It worked!!!')
        return fakeRequestPromise('yelp.com/api/cffee/page3')
    })
    .then(() => {
        console.log('It worked!!!')
    })
    .catch(() => {
        console.log('Oh No request  failed!!!');
    })