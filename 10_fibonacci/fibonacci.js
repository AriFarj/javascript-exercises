const fibonacci = function (index) {
    if (index < 0) return `OOPS`
    if (index == 0) return 0;

     index = parseInt(index);

let firstPrev = 1;
let secondPrev = 0;

    for (i = 2; i <= index; i++){
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
