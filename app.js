const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};

isRightTriangle(26, 11, 12)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('orange', 3000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('blue', 2000, () => {
            delayedColorChange('blue', 3000, () => {
                delayedColorChange('brown', 1000, () => {

                })
            });
        });
    });
});


// delayedColorChange('red', 5000);