const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yello', 1000)
    await delayedColorChange('cyan', 1000)
    await delayedColorChange('green', 1000)
    return "All Done"
}

rainbow().then(() => console.log("End of Rainbow"));


async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow")

}

printRainbow();








async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2)
    } catch (e) {
        console.log('cought An Error!')
        console.log("error is", e)
    }
}