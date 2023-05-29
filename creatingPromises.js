const fakeRequest = () => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.75) {
                resolve('Your fake data here');
            }
            reject('Request error')
        }, 3000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WITH REQUEST!!!')
        console.log('Data is:' data)
    })
    .catch((err) => {
        console.log('Oh No!', err)
    })